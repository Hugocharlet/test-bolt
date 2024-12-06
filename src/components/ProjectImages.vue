<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})

const validImages = ref([])

const validateImage = async (imageSrc) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = imageSrc
  })
}

const validateImages = async () => {
  const validatedImages = await Promise.all(
    props.images.map(async (img) => {
      const isValid = await validateImage(img.src)
      return isValid ? img : null
    })
  )
  validImages.value = validatedImages.filter(img => img !== null)
}

onMounted(() => {
  AOS.init()
  validateImages()
})
</script>

<template>
  <div v-if="isLoading" id="loader">
    <div class="spinner"></div>
  </div>

  <div id="image-container">
    <img
      v-for="(img, index) in validImages"
      :key="index"
      :src="img.src"
      class="imagelarge"
      data-aos="fade"
      :alt="img.alt"
    />
  </div>
</template>

<style>
@import '../assets/styles/images.css';
@import '../assets/styles/loader.css';
</style>