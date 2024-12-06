<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import BackArrow from '../components/BackArrow.vue'
import ArticleTextColumn from '../components/ArticleTextColumn.vue'
import ModelViewer from '../components/ModelViewer.vue'
import ProjectImages from '../components/ProjectImages.vue'
import { useImageLoader } from '../utils/imageLoader'
import { useArticle } from '../composables/useArticle'
import { useScrollFade } from '../composables/useScrollFade'

const route = useRoute()
const articleId = route.params.id
const { isLoading } = useImageLoader(articleId)
const showModelViewer = ref(false)
const currentModel = ref('')
const { article } = useArticle(articleId)
const mainImageRef = ref(null)
const { opacityValue } = useScrollFade(mainImageRef)

const openModelViewer = (modelSrc) => {
  currentModel.value = modelSrc
  showModelViewer.value = true
}

const closeModelViewer = () => {
  showModelViewer.value = false
  currentModel.value = ''
}
</script>

<template>
  <div v-if="article" class="article-page">
    <BackArrow />

    <main>
      <img 
        ref="mainImageRef"
        class="imagemain" 
        :src="`/images/articles/${articleId}/main.jpg`" 
        :alt="article.title"
      />
      
      <div 
        class="text-column-wrapper" 
        :style="{ opacity: opacityValue }"
      >
        <ArticleTextColumn
          :title="article.title"
          :subtitle="article.subtitle"
          :dimension="article.dimension"
          :description="article.description"
          :models="article.models"
          @openModel="openModelViewer"
        />
      </div>
    </main>

    <ModelViewer
      v-if="showModelViewer"
      :modelSrc="currentModel"
      @close="closeModelViewer"
    />

    <ProjectImages
      :images="article.images"
      :isLoading="isLoading"
    />
  </div>
</template>

<style>
@import '../assets/styles/images.css';
@import '../assets/styles/loader.css';
@import '../assets/styles/model-viewer.css';

.article-page {
  background-color: white;
  min-height: 100vh;
}

main {
  position: relative;
  width: 100%;
}

.text-column-wrapper {
  will-change: opacity;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  width: calc(36% - var(--margin-general));
  margin-left: var(--margin-general);
  position: fixed;
  top: 150px;
  z-index: 10;
}

@media (max-width: 600px) {
  .text-column-wrapper {
    opacity: 1 !important;
    position: relative;
    margin-left: var(--margin-general);
    margin-right: var(--margin-general);
    width: 80%;
    top: 0;
    margin-top: 20px;
  }
}
</style>