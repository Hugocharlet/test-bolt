<script setup>
defineProps({
  projects: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="gallery">
    <RouterLink
      v-for="project in projects"
      :key="project.id"
      :to="{ name: 'Article', params: { id: project.id } }"
      class="gallery-item "
      
    >
      <div class="image-container">
        <img
          :src="`/images/grid-preview/${project.gridImages[0]}`"
          :alt="project.name"
          data-aos="fade"
        />
      </div>
      <h2 class="name">{{ project.name.toUpperCase() }}</h2>
    </RouterLink>
  </div>
</template>

<style scoped>
body {
  font-family: 'Hanken Grotesk', sans-serif;
  color: #303030;
}

.gallery {
  padding: 10px var(--margin-general) 0px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0px;
}

.gallery-item {
  position: relative;
  text-decoration: none;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.gallery-item img {
  display: block;
  object-fit: cover;
  filter: grayscale(0%);
  transition: filter 0.5s ease, transform 0.5s ease;
  max-height: 100%;
  max-width: 100%;
}

.name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 11;
  font-size: 18px;
  font-weight: 500;
  color: #f1f1f1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.gallery-item:hover img {
  filter: grayscale(100%) brightness(38%);
  animation: zoomquick 0.3s forwards;
  z-index: 10;
  opacity: 1;
  position: relative;
}

.gallery-item:hover .name {
  opacity: 1;
  visibility: visible;
}

@keyframes zoomquick {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.01);
  }
}

@keyframes zoomslow {
  0%,
  100% {
    transform: scale(1.01);
  }
  50% {
    transform: scale(1.5);
  }
}

footer p {
  font-family: 'Roboto';
  text-decoration: none;
  color: inherit;
  padding: 35px;
  font-size: 12px;
  text-align: center;
}

@media (max-width: 600px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    box-sizing: border-box;
  }

  .gallery-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }

  .image-container {
    width: 100%;
    aspect-ratio: 1;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name {
    position: static;
    transform: none;
    visibility: visible;
    opacity: 1;
    padding: 5px;
    font-weight: 600;
    font-size: 14px;
    color: #303030;
    background: transparent;
    text-align: center;
    width: 100%;
    text-decoration: none;
  }

  footer p {
    font-size: 9px;
    color: #666;
    text-align: center;
    margin-top: 20px;
    width: 100%;
    padding: 10px 0;
    box-sizing: border-box;
  }
}
</style>