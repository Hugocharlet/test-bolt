<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <div class="contact-wrapper">
    <div class="image-container">
      <img src="/images/carte.jpg" alt="image fond" data-aos="fade" />
    </div>

    <div class="colonne-container" data-aos="fade">
      <h1 class="titre">CONTACT:</h1>
      <p>
        Hugo Charlet design studio <br />
        8 rue du commandant Arnould <br />
        33000 Bordeaux [France] <br /><br />
        <a class="texte" href="mailto:info@hugocharlet.com"
          >E-mail:<span class="muted"> info@hugocharlet.com</span></a
        >
        <br />
        <a class="texte" href="https://www.instagram.com/hugocharletb/"
          >IG:<span class="muted"> @hugocharletb</span></a
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
.contact-wrapper {
  background-color: var(--about-bg-color);
  min-height: 100vh;
  width: 100%;
  font-family: 'IBM Plex Mono', monospace;
  color: #303030;
  position: relative;
  padding-bottom: 2rem;
}

h1 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  border-bottom: 0px solid #afafaf;
}

.texte,
p {
  font-weight: 400;
  font-style: italic;
  font-family: 'IBM Plex Mono', monospace;
  color: #303030;
  font-size: 12px;
  text-decoration: none;
}

.muted {
  color: #808080;
}

.colonne-container {
  margin-right: var(--margin-general);
  margin-left: calc(30% + var(--margin-general) + 20px);
  margin-top: 90px;
}

.image-container {
  position: fixed;
  top: 90px;
  left: var(--margin-general);
  width: 30vw;
  aspect-ratio: 1/1;
}

.image-container img {
  width: 100%;
}

@media (max-width: 600px) {
  .image-container {
    display: none;
  }

  .titre {
    display: none;
  }

  .colonne-container {
    margin-top: 90px;
    padding-top: 20px;
    margin-right: var(--margin-general);
    margin-left: var(--margin-general);
  }
}
</style>
