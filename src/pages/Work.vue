<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import WorkList from '../components/work/WorkList.vue'
import WorkGrid from '../components/work/WorkGrid.vue'
import ViewToggle from '../components/work/ViewToggle.vue'
import { projects } from '../data/projects'

const route = useRoute()
const viewMode = computed(() => route.query.view === 'grid' ? 'grid' : 'list')
</script>

<template>
  <div class="work-page" :class="{ 'grid-mode': viewMode === 'grid' }">
    <ViewToggle :viewMode="viewMode" />

    <Transition name="fade" mode="out-in">
      <WorkList v-if="viewMode === 'list'" :projects="projects" />
      <WorkGrid v-else :projects="projects" />
    </Transition>

    <footer>
      <p>&copy; 2024 hugocharletdesign</p>
    </footer>
  </div>
</template>

<style scoped>
.work-page {
  padding-top: 90px;
  min-height: 100vh;
  background-color: #f3f3f3;
  font-family: "Hanken Grotesk", sans-serif;
  transition: background-color 0.3s ease;
}

.work-page.grid-mode {
  background-color: white;
}

footer p {
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 25px;
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  footer p {
    font-size: 9px;
    position: relative;
    margin-top: 30px;
    width: 100%;
  }
}
</style>