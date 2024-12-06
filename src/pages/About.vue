<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init()
})
</script>

<template>
  <div class="about-wrapper">
    <div class="photo-profile">
      <img src="/images/fond.jpg" data-aos="fade" alt="image fond" />
    </div>

    <div class="colonne-container" data-aos="fade-up">
      <hr>
      <h1>CURSUS:</h1>
      <p>
        Hugo Charlet is a French designer with extensive experience in the
        furniture industry. After obtaining a degree in material engineering,
        his passion for design drove him to Milan where he pursued a Master's
        degree in Furniture Design at the renowned university Politecnico
        Milano. After completing his studies, he joined
        <span class="highlight">Michele De Lucchi's design office</span>
        in 2019 at is office of Milan and worked on projects for top brands such
        as Artemide, Alessi or Poltrona frau. He also collaborated for 2years
        with renowned designer
        <span class="highlight">Emmanuel Gallina</span> on
        several innovative furniture projects for international brands like
        Poliform, Porada, AMPM, and Roche Bobois.<br /><br />
        More recently, he has worked at
        <span class="highlight">Claudio Bellini design office</span>
        on several outdoor projects. He also collaborated with contemporary
        lighting companies and high end furniture brands. Hugo Charlet is a
        determined and passionate designer who continues to develop and improve
        in his profession. He has participated in several design competitions
        and is constantly developing new projects to enrich his portfolio. One
        of his projects, the Tomeo chairs, were rewarded with a silver medal at
        the A'design Award in 2021. <br /><br />
        His technical background provides him with a strong understanding of the
        technical and material constraints involved in the production of his
        designs. This knowledge allows him to create feasible projects that
        balance both form and function. Through his collaborations with esteemed
        designers like Michele De Lucchi and Emmanuel Gallina, he has learnt the
        profession and developed a deep understanding of the codes of
        contemporary furniture design.
      </p>
      <hr style="margin-top:1rem">
      <h2>CONTACT:</h2>
      <p>
        Hugo Charlet design studio <br />
        8 rue du commandant Arnould <br />
        33000 Bordeaux [France] <br />
      </p>
      <a class="texte" href="mailto:info@hugocharlet.com">E-mail:<span class="muted"> info@hugocharlet.com</span></a>
      <br />
      <a class="texte" href="https://www.instagram.com/hugocharletb/">IG:<span class="muted"> @hugocharletb</span></a>
      <hr style="margin-top:1rem">
      <h2>AWARDS:</h2>
      <p>-A'Design award 2021 <a class="texte muted" href="https://competition.adesignaward.com/gooddesign.php?ID=101890">(for Tomeo collection)</a></p>
      <hr style="margin-top:1rem">
      <h2>EXHIBITIONS:</h2>
      <p>-Salone del Mobile Milano 2024 <a class="texte muted" href="helena.html">(Helena collection)</a></p>
      <p class="texte">-Paris design week Maison&Objets - Galerie Joseph 2024</p>
      <hr style="margin-top:1rem">
      <h2>DOWLOADS:</h2>
      <a class="texte muted" href="portfolio.pdf">-PDF Portfolio</a>
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<style scoped>
/* Import fonts */
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

.about-wrapper {
  background-color: var(--about-bg-color);
  min-height: 100vh;
  width: 100%;
  font-family: "IBM Plex Mono", monospace;
  color: #303030;
  position: relative;
  padding-bottom: 2rem;
}

.colonne-container {
  margin-right: var(--margin-general);
  margin-left: max(calc(var(--margin-general) + 320px), calc(30% + var(--margin-general) + 20px));
  text-align: left;
  margin-top: 90px;
}

h1, h2 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  border-bottom: 0px solid #afafaf;
  text-align: left;
}

h2 {
  margin-top: 0.5rem;
}

p, .texte {
  font-weight: 400;
  font-family: "IBM Plex Mono", monospace;
  font-style: italic;
  color: #303030;
  font-size: 12px;
  margin-right: var(--margin-general);
  text-align: left;
  text-decoration: none;
}

.muted {
  color: #808080;
}

.highlight {
  background-color: #f1f1f1;
}

hr {
  border: none;
  height: 1px;
  background-color: #afafaf;
  margin-bottom: 0.5rem;
}

.photo-profile {
  position: fixed;
  top: 90px;
  left: var(--margin-general);
  width: 30vw;
  min-width: 300px;
  height: 800px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.photo-profile img {
  height: 100%;
}

@media (max-width: 600px) {
  .texte, p {
    margin-right: 0px;
  }
  
  hr {
    display: none;
  }
  
  .photo-profile {
    display: none;
  }
  
  h2 {
    margin-top: 1rem;
  }
  
  .colonne-container {
    
    margin-right: var(--margin-general);
    margin-left: var(--margin-general);
    margin-top: 90px;
    padding-top: 20px;
  }
}

@media (max-width: 1600px) {
  .photo-profile {
    height: 500px;
  }
}
</style>