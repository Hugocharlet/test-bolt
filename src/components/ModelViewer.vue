<script setup>
import { onMounted } from 'vue'
import '@google/model-viewer'

const props = defineProps({
  modelSrc: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}

onMounted(() => {
  // Prevent scrolling when model viewer is open
  document.body.style.overflow = 'hidden'
  return () => {
    document.body.style.overflow = 'auto'
  }
})
</script>

<template>
  <div id="modelContainer">
    <button class="close-button" @click="handleClose">
      <img src="/images/ui/cross.svg" alt="Close" />
    </button>
    <model-viewer
      id="modelViewer"
      :src="modelSrc"
      autoplay
      loading="eager"
      ar
      ar-modes="webxr scene-viewer quick-look"
      ar-status="not-presenting"
      auto-rotate
      bounds="tight"
      rotation-per-second="1deg"
      environment-image="/glb/studio.hdr"
      exposure="0.7"
      camera-controls
      interpolation-decay="200"
      shadow-intensity="1"
      interaction-prompt="none"
      camera-orbit="-40deg 82deg 12m"
      min-camera-orbit="auto 40deg a"
    >
    </model-viewer>
  </div>
</template>

<style scoped>
#modelContainer {
  position: fixed;
  top: 50%;
  right: var(--margin-general);
  transform: translateY(-50%);
  width: 80%;
  max-width: 84%;
  height: 75vh;
  background-color: rgba(255, 255, 255, 0.88);
  padding: 20px;
  box-sizing: border-box;
  z-index: 3000;
}

#modelViewer {
  width: 100%;
  height: 100%;
  display: block;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  background: transparent;
  cursor: pointer;
  border: none;
  padding: 0;
  z-index: 1001;
}

@media (max-width: 600px) {
  #modelContainer {
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    z-index: 1000;
  }
}
</style>