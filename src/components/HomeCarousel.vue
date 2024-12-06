<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  '/images/home-carousel/anton 12.jpg',
  '/images/home-carousel/Anton tissu blanc.jpg',
  '/images/home-carousel/bélvédère .401.jpg',
  '/images/home-carousel/bélvédère .406 carré.jpg',
  '/images/home-carousel/format carte postale3.jpg',
  '/images/home-carousel/image10.jpg',
  '/images/home-carousel/image12.jpg',
  '/images/home-carousel/image13.jpg',
  '/images/home-carousel/image15.jpg',
  '/images/home-carousel/image3.jpg',
  '/images/home-carousel/image4.jpg',
  '/images/home-carousel/image6.jpg',
  '/images/home-carousel/mistral 2.jpg',
  '/images/home-carousel/new BH 13.jpg',
  '/images/home-carousel/perspective 1.jpg',
  '/images/home-carousel/Table.jpg',
  '/images/home-carousel/téo2.jpg',
  '/images/home-carousel/tomeo emplilée hd.jpg',
  '/images/home-carousel/untitled14-1.jpg',
  '/images/home-carousel/untitled22.jpg',
  '/images/home-carousel/wegner15 19.jpg',
  '/images/home-carousel/wegner15 21.jpg'
]

const currentIndex = ref(0)
const isTransitioning = ref(false)
const autoplayInterval = ref(null)

const nextImage = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentIndex.value = (currentIndex.value + 1) % images.length
  setTimeout(() => {
    isTransitioning.value = false
  }, 500)
}

const prevImage = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentIndex.value = currentIndex.value === 0 ? images.length - 1 : currentIndex.value - 1
  setTimeout(() => {
    isTransitioning.value = false
  }, 500)
}

const startAutoplay = () => {
  autoplayInterval.value = setInterval(nextImage, 8000) // Increased to 8 seconds
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
    autoplayInterval.value = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <div 
    class="carousel-container" 
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <div class="image-container">
      <img 
        :src="images[currentIndex]"
        :key="currentIndex"
        :class="{ 'fade-enter': isTransitioning }"
        alt="Project image"
        @click="nextImage"
        class="clickable"
      />
    </div>
    
    <div class="nav-arrow-container">
      <div class="nav-arrow-wrapper left" @click="prevImage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="arrow-svg"
          alt="Previous arrow"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 8.25 3 12m0 0 3.75 3.75M3 12H12"
          />
        </svg>
        <span class="arrow-text">previous</span>
      </div>
      <div class="nav-arrow-wrapper right" @click="nextImage">
        <span class="arrow-text">next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="arrow-svg"
          alt="Next arrow"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H12"
          />
        </svg>
      </div>
    </div>

    <footer>
      <p>&copy; 2024 hugocharletdesign</p>
    </footer>
  </div>
</template>

<style scoped>
.carousel-container {
  position: relative;
  margin: 90px var(--margin-general) 0;
  height: 77vh;
  z-index: 0;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  position: relative;
}

img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.clickable {
  cursor: pointer;
}

.nav-arrow-container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: calc(100% + 2 * var(--margin-general));
  left: calc(-1 * var(--margin-general));
  padding: 0 var(--margin-general);
  box-sizing: border-box;
}

.nav-arrow-wrapper {
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  cursor: pointer;
  padding: 0 10px;
}

.left {
  margin-right: auto;
}

.right {
  margin-left: auto;
}

.left:hover {
  transform: translateX(-3px);
}

.right:hover {
  transform: translateX(3px);
}

.nav-arrow-wrapper:hover .arrow-svg {
  stroke: #303030;
  fill: #303030;
}

.nav-arrow-wrapper:hover .arrow-text {
  color: #303030;
}

.arrow-svg {
  height: 20px;
  width: auto;
  stroke: #afafaf;
  fill: #afafaf;
}

.arrow-text {
  font-size: 0.8rem;
  font-family: "IBM Plex Mono", monospace;
  font-weight: 400;
  font-style: italic;
  color: #afafaf;
  margin: 0 8px;
}

footer p {
  font-family: "Roboto";
  font-size: 12px;
  color: #666;
  text-align: center;
  position: fixed;
  bottom: 20px;
  width: 100%;
  left: 0;
}

@media (max-width: 600px) {
  .carousel-container {
    margin: 90px 0 0;
    height: auto;
    aspect-ratio: 1;
  }

  .image-container {
    aspect-ratio: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .nav-arrow-container {
    position: relative;
    top: 0;
    transform: none;
    width: 100%;
    left: 0;
    padding: 20px var(--margin-general);
    background: transparent;
  }

  footer p {
    position: relative;
    font-size: 9px;
    margin-top: 20px;
    padding: 10px 0;
  }
}
</style>