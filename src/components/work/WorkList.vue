<script setup>
import { ref } from 'vue'
import { useMouseTracking } from '../../composables/useMouseTracking'

defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const listRef = ref(null)
useMouseTracking(listRef)
</script>

<template>
  <div class="tableau" ref="listRef">
    <div class="premiere-ligne">
      <div class="item"><span>YEAR</span></div>
      <div class="item"><span>NAME</span></div>
      <div class="item"><span>TYPOLOGIE</span></div>
    </div>
    
    <RouterLink
      v-for="project in projects"
      :key="project.id"
      :to="{ name: 'Article', params: { id: project.id }}"
      class="ligne"
    >
      <div class="item"><span>{{ project.year }}</span></div>
      <div class="item"><span>{{ project.name.toUpperCase() }}</span></div>
      <div class="item"><span>{{ project.typology }}</span></div>
      <img 
        :src="`/images/grid-preview/${project.gridImages[0]}`" 
        :alt="project.name"
        class="preview-image"
      />
    </RouterLink>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

.tableau {
  padding: 35px var(--margin-general) 20px;
  z-index: 1;
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 13px;
  color: #303030;
}

.premiere-ligne {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  font-weight: 700;
}

.ligne {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 4px;
  font-weight: 400;
  transition: background-color 0.3s ease;
  cursor: none;
  text-decoration: none;
  color: rgb(175, 175, 175);
}

.item {
  flex: 1;
}

.item:nth-child(2) {
  text-align: center;
}

.item:nth-child(3) {
  text-align: end;
}

.ligne:hover {
  font-weight: 500;
  font-family: "IBM Plex Mono", monospace;
  font-style: italic;
  background-color: rgba(0, 0, 120, 0.06);
  color: #303030;
}

.preview-image {
  display: none;
  position: fixed;
  width: 300px;
  height: 300px;
  object-fit: cover;
  pointer-events: none;
  z-index: 10000;
  
}

.ligne:hover .preview-image {
  display: block;
  animation: zoom 30s infinite;
}

@keyframes zoom {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}

@media (max-width: 600px) {
  .ligne {
    font-size: 11px;
  }
  
  .premiere-ligne {
    font-size: 11px;
  }
  
  .preview-image {
    display: none !important;
  }
}
</style>