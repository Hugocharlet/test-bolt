import { onMounted, onUnmounted } from 'vue'

export function useMouseTracking(containerRef) {
  const handleMouseMove = (event) => {
    if (!containerRef.value) return

    const previewImages = containerRef.value.querySelectorAll('.preview-image')
    previewImages.forEach(img => {
      // Use clientX/Y for viewport-relative positioning
      const x = event.clientX - (img.offsetWidth / 2)
      const y = event.clientY - (img.offsetHeight / 2)
      
      img.style.left = `${x}px`
      img.style.top = `${y}px`
    })
  }

  onMounted(() => {
    if (containerRef.value) {
      containerRef.value.addEventListener('mousemove', handleMouseMove)
    }
  })

  onUnmounted(() => {
    if (containerRef.value) {
      containerRef.value.removeEventListener('mousemove', handleMouseMove)
    }
  })
}