<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import AOS from 'aos'

onMounted(() => {
  // Refresh AOS on route changes
  AOS.refresh()
})
</script>

<template>
  <div class="app-container">
    <NavBar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
.app-container {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
}

main {
  margin-top: 2rem;
}
</style>