<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  dimension: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  models: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['openModel'])

const handleModelClick = (model) => {
  if (model.type === 'link') {
    window.open(model.href, '_blank')
  } else if (model.type === 'download') {
    window.location.href = model.href
  } else {
    emit('openModel', model.src)
  }
}
</script>

<template>
  <div class="colonne-fixed">
    <h1 class="Title">{{ title }}</h1>
    <h2 class="Subtitle">{{ subtitle }}</h2>
    <div class="textebox-container">
      <p class="texte">{{ dimension }}</p>
      <p class="texte">{{ description }}</p>
    </div>
    <div class="sousmenu-wrapper">
      <div 
        v-for="model in models" 
        :key="model.id" 
        class="icon-container"
      >
        <a
          href="#"
          @click.prevent="handleModelClick(model)"
          class="icon-link"
        >
          <img 
            :src="model.type === 'link' ? '/images/ui/config.svg' : 
                  model.type === 'download' ? '/images/ui/download.svg' : 
                  '/images/ui/3d-icon.svg'"
            :alt="model.alt" 
            class="icon-item"
          />
        </a>
        <div class="texte texte-icon">{{ model.label }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.colonne-fixed {
  padding: 10px;
  font-family: "Hanken Grotesk", sans-serif;
}

.Title {
  font-size: 30px;
  font-weight: 500;
  text-align: left;
}

.Subtitle {
  padding: 2px;
  font-size: 15px;
  font-weight: 500;
  text-align: left;
}

.textebox-container {
  text-align: left;
}

.texte {
  padding: 10px;
  font-size: 14px;
  font-family: "Hanken Grotesk", sans-serif;
  font-weight: 300;
  color: #303030;
  text-align: left;
}

.sousmenu-wrapper {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 10px;
}

.icon-container {
  align-items: center;
}

.icon-link {
  display: flex;
  align-items: center;
}

.icon-link:hover + .texte-icon {
  display: block;
}

.icon-item {
  width: 30px;
  height: auto;
  transition: filter 0.3s ease;
}

.icon-link:hover .icon-item {
  filter: brightness(0);
}

.texte-icon {
  margin-top: 10px;
  position: absolute;
  display: none;
  padding: 5px 8px;
  border-radius: 15px;
  background-color: #f1f1f1;
  font-weight: 600;
}

@media (max-width: 600px) {
  .Title {
    font-size: 16px;
    margin-bottom: 0;
  }

  .texte {
    padding: 10px;
    font-size: 9px;
  }

  .Subtitle {
    padding: 2px;
    font-size: 9px;
  }

  .sousmenu-wrapper {
    flex-direction: column;
    gap: 5px;
  }

  .texte-icon {
    display: block;
    position: relative;
    background-color: white;
  }

  .icon-container {
    display: flex;
  }
}
</style>