<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div id="menu-placeholder"></div>
    <div class="svg-container-pages">
      <RouterLink to="/" class="back-link">
        <img src="/images/ui/back-arrow.svg" alt="Back to home" class="svg-backarrow" />
      </RouterLink>
    </div>
  </header>
</template>

<style>
.svg-container-pages {
  width: 100%;
  padding: 0 var(--margin-general);
  position: fixed;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 90px;
  left: 0px;
  height: 35px;
  z-index: 2100;
}

.svg-container-pages a img {
  height: 10px;
  width: auto;
  transition: transform 0.3s ease;
}

.svg-container-pages a:hover img {
  transform: translateX(-7px);
  filter: brightness(0);
}

@media(max-width: 600px) {
  .svg-container-pages {
    padding: 20px var(--margin-general);
    display: none;
  }
}
</style>