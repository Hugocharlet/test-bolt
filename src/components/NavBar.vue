<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const navBackground = computed(() => {
  if (route.path.includes('/about') || route.path.includes('/contact')) {
    return '#e5e5e5'
  }
  if (route.path === '/work') {
    return route.query.view === 'grid' ? 'white' : '#f3f3f3'
  }
  return 'white'
})
</script>

<template>
  <nav :style="{ backgroundColor: navBackground }">
    <RouterLink to="/" class="nav-header" @click="closeMenu">Hugo Charlet</RouterLink>

    <div class="navlinks-container" :class="{ open: isMenuOpen }">
      <RouterLink 
        to="/work"
        :class="{ active: $route.path === '/work' }"
        @click="closeMenu"
      >
        WORK
      </RouterLink>
      <RouterLink 
        to="/about" 
        :class="{ active: $route.path === '/about' }"
        @click="closeMenu"
      >
        ABOUT
      </RouterLink>
      <RouterLink 
        to="/contact" 
        :class="{ active: $route.path === '/contact' }"
        @click="closeMenu"
      >
        CONTACT
      </RouterLink>
    </div>

    <button class="hamburger" :class="{ open: isMenuOpen }" @click="toggleMenu" :aria-expanded="isMenuOpen"
  aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <a href="https://www.instagram.com/hugocharletb/" target="_blank" rel="noopener noreferrer">
      <img src="/images/ui/instagram.svg" alt="Instagram" class="instagram-logo" />
    </a>
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap");

nav {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  top: 0px;
  left: 0px;
  padding: 0 var(--margin-general);
  height: 90px;
  z-index: 3000;
  font-family: "Hanken Grotesk", sans-serif;
  transition: background-color 0.3s ease;
}

.nav-header {
  text-decoration: none;
  font-size: 22px;
  font-weight: 800;
  color: #303030;
}

.navlinks-container {
  display: flex;
  gap: 40px;
  margin-left: auto;
  font-size: 14px;
  font-weight: 600;
}

.navlinks-container a {
  padding: 2px 10px;
  color: #afafaf;
  text-decoration: none;
  transition: color 0.35s ease, transform 0.35s ease;
}

.navlinks-container a:hover {
  transform: translateY(-3px);
  color: #303030;
}

.active {
  background-color: white;
  padding: 2px 4px;
  border-radius: 15px;
  color: #303030 !important;
}

.hamburger {
  display: none;
}

.instagram-logo {
  position: fixed;
  bottom: 35px;
  right: 35px;
  z-index: 10;
  width: 1.9%;
  min-width: 25px;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: block;
  filter: brightness(1.7) saturate(0);
}

.instagram-logo:hover {
  filter: none;
}

@media (max-width: 600px) {
  .navlinks-container {
    gap: 2px;
  }
  
  .navlinks-container a {
    font-size: 13px;
  }
  
  .instagram-logo {
    display: none;
  }
}

@media (max-width: 470px) {
  .nav-header {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .instagram-logo {
    opacity: 0;
    pointer-events: none;
  }
  
  .hamburger {
    margin-left: auto;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border: none;
    display: flex;
    background: transparent;
    align-items: center;
    position: relative;
  }

  .hamburger span {
    display: block;
    width: 100%;
    height: 2px;
    background: #303030;
    position: absolute;
    pointer-events: none;
    transition: opacity 0.3s 0.15s ease-out;
  }
  
  .hamburger span:nth-child(1),
  .hamburger span:nth-child(3) {
    transition: transform 0.3s ease-out;
  }

  .hamburger span:nth-child(1) {
    transform: translateY(7px);
  }
  
  .hamburger span:nth-child(3) {
    transform: translateY(-7px);
  }

  .hamburger.open span:nth-child(1) {
    transform: translate(0) rotate(135deg);
  }
  
  .hamburger.open span:nth-child(2) {
    opacity: 0;
    transition: opacity 0s ease-out;
  }
  
  .hamburger.open span:nth-child(3) {
    transform: translate(0) rotate(-135deg);
  }

  .navlinks-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    text-align: center;
    top: 100%;
    right: 0;
    width: 100%;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    height: 100vh;
    padding: 15px 20px;
    background-color: inherit;
    z-index: 3000;
  }

  .navlinks-container.open {
    transform: translateX(0%);
  }

  .navlinks-container a {
    font-size: 1.3rem;
    background: transparent;
    padding: 1rem;
    color: #303030;
    text-decoration: none;
  }

  .navlinks-container a:hover {
    transform: none;
  }

  .navlinks-container a:active {
    color: #303030;
  }
}
</style>
```