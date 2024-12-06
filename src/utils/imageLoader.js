import { ref } from 'vue'

export function useImageLoader(articleId) {
  const isLoading = ref(false)
  
  function getArticleImages(id) {
    return Array.from({ length: 20 }, (_, i) => ({
      src: `/images/articles/${id}/${i + 1}.jpg`,
      alt: `${id} view ${i + 1}`
    })).filter(img => {
      // Only return images that exist
      const image = new Image()
      image.src = img.src
      return image.complete
    })
  }

  return {
    isLoading,
    getArticleImages
  }
}