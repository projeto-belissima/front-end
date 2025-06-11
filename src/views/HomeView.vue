<script setup>
import { ref } from 'vue'

const stories = ref([
  {id: 1, nome: "Novidades", img: "quadrado-marrom.png", alt: ""},
  {id: 2, nome: "Longos", img: "quadrado-marrom.png", alt: ""},
  {id: 3, nome: "Midis", img: "quadrado-marrom.png", alt: ""},
  {id: 4, nome: "Curtos", img: "quadrado-marrom.png", alt:""},
])

const imgUrl = (img) => new URL(`../assets/img/${img}`, import.meta.url).href;
</script>

<template>
  <main>
    <section class="secao-stories">
      <div class="secao-stories-story" v-for="story in stories" :key="story.id">
        <img :src="imgUrl(story.img)">
        <h5>{{ story.nome }}</h5>
      </div>
    </section>
  </main>
</template>

<style scoped>
  .secao-stories {
    display: flex;
    gap: 1.5rem;
    width: 100%;
    margin-top: 3rem;
    padding: 1rem;
    justify-content: center;
  }

  .secao-stories-story {
    display: grid;
    row-gap: 10px;
    justify-items: center;

    & img {
      width: 7rem;
      border-radius: 50%;
    }

    & h5 {
      font-family: var(--fonte-principal);
      font-size: 1rem;
      font-weight: 400;
    }
  }
</style>
