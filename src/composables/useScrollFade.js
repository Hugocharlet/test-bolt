import { ref, onMounted, onUnmounted, watch } from 'vue'

export function useScrollFade(mainImageRef) {
  const scrollY = ref(0)
  const opacityValue = ref(0)
  const mainImageHeight = ref(0)

  const handleScroll = () => {
    scrollY.value = window.scrollY
    const viewportHeight = window.innerHeight
    const opacityStartThreshold = mainImageHeight.value * 0.15
    const opacityFullThreshold = mainImageHeight.value * 0.35

    if (scrollY.value <= opacityStartThreshold) {
      opacityValue.value = 0
    } else if (scrollY.value >= opacityFullThreshold) {
      opacityValue.value = 1
    } else {
      const progress = (scrollY.value - opacityStartThreshold) / 
                      (opacityFullThreshold - opacityStartThreshold)
      opacityValue.value = Math.min(1, Math.max(0, progress))
    }
  }

    // Fonction pour mettre à jour la hauteur de l'image
    const updateMainImageHeight = () => {
      if (mainImageRef.value) {
        mainImageHeight.value = mainImageRef.value.clientHeight;
      }
    };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    
      if (mainImageRef.value) {
        mainImageRef.value.onload = updateMainImageHeight; // Garantit le chargement complet
        updateMainImageHeight();
      }

      // Si la fenêtre est redimensionnée
      window.addEventListener('resize', updateMainImageHeight);
    });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', updateMainImageHeight)
  })

  return {
    opacityValue
  }
}