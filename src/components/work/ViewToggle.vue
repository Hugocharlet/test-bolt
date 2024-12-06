<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const toggleView = () => {
  const newView = route.query.view === 'grid' ? 'list' : 'grid'
  router.push({ query: { ...route.query, view: newView } })
}

defineProps({
  viewMode: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="svg-container" :class="{ 'grid-mode': viewMode === 'grid' }">
    <a href="#" @click.prevent="toggleView">
      <img 
        :src="viewMode === 'list' ? '/images/ui/grid-icon.svg' : '/images/ui/list-icon.svg'" 
        :alt="viewMode === 'list' ? 'Switch to grid view' : 'Switch to list view'"
      />
    </a>
  </div>
</template>

<style scoped>
.svg-container {
    width: 100%;
    padding: 0 var(--margin-general); /* Espacement horizontal du menu */
    box-sizing: border-box;
    display: flex;
    align-items: center;
    z-index: 2000;
    align-items: center; /* Centre les icônes verticalement */
    justify-content: flex-end; /* Aligne les SVG à droite du conteneur */
    gap: 13px; /* Espace entre les SVG */
    
}
.svg-container a:hover img {
    filter: brightness(0); /* Assombrit le SVG au survol */
    transform: scale(1.025) translateY(-1px);
}
.svg-container a img{
    height: 10px; 
    width: auto;
    transition: transform 0.3s ease;
}


@media (max-width: 600px) {
  .svg-container {
    position: sticky;
  }
}
</style>