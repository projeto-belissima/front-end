<script setup>
import { ref, onMounted } from 'vue'
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const stories = ref([
  {id: 1, nome: "Novidades", img: "quadrado-marrom.png", alt: ""},
  {id: 2, nome: "Longos", img: "quadrado-marrom.png", alt: ""},
  {id: 3, nome: "Midis", img: "quadrado-marrom.png", alt: ""},
  {id: 4, nome: "Curtos", img: "quadrado-marrom.png", alt:""},
])

const destaques = ref([
  {id: 1, nome: "vestido midi com manga longa", mediaPreco: "109.90", img: "vestido-midi-marrom.png", alt: ""},
  {id: 2, nome: "vestido longo verde florido", mediaPreco: "109.90", img: "vestido-longo-verde-florido.png", alt: ""},
  {id: 3, nome: "vestido sarja marrom", mediaPreco: "109.90", img: "vestido-sarja-marrom.png", alt: ""},
  {id: 4, nome: "vestido midi com manga longa", mediaPreco: "109.90", img: "vestido-midi-marrom.png", alt: ""},
  {id: 5, nome: "vestido longo verde florido", mediaPreco: "109.90", img: "vestido-longo-verde-florido.png", alt: ""},
  {id: 6, nome: "vestido sarja marrom", mediaPreco: "109.90", img: "vestido-sarja-marrom.png", alt: ""},
  {id: 7, nome: "vestido midi com manga longa", mediaPreco: "109.90", img: "vestido-midi-marrom.png", alt: ""},
  {id: 8, nome: "vestido longo verde florido", mediaPreco: "109.90", img: "vestido-longo-verde-florido.png", alt: ""},
  {id: 9, nome: "vestido sarja marrom", mediaPreco: "109.90", img: "vestido-sarja-marrom.png", alt: ""},
])

const imgUrl = (img) => new URL(`../assets/img/${img}`, import.meta.url).href;

onMounted(() => {
  new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
})
</script>

<template>
  <main>
    <section class="secao-stories">
      <div class="secao-stories-story" v-for="story in stories" :key="story.id">
        <img :src="imgUrl(story.img)" :alt="story.alt">
        <h5>{{ story.nome }}</h5>
      </div>
    </section>

    <section class="secao-carrossel">
      <article class="secao-carrossel-apresentacao">
        <h2>Aproveitando nosso querido outono</h2>
        <h3>Confira já!</h3>
      </article>

      <div class="swiper">

        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="destaque in destaques" :key="destaque.id">
            <img :src="imgUrl(destaque.img)" :alt="destaque.alt">
            <h6>{{ destaque.nome }}</h6>
            <p>R$ {{ destaque.mediaPreco.replace('.', ',') }}</p>
          </div>
        </div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

      </div>
    </section>

    <section class="secao-colaboradores">
      <h2>Quem somos nós?</h2>

      <div class="colaboradores-img">
        <div>
          <img src="/src/assets/img/ester.png" alt="Ester">
          <p>Ester</p>
        </div>

        <div>
          <img src="/src/assets/img/renata.png" alt="Renata">
          <p>Renata</p>
        </div>

        <div>
          <img src="/src/assets/img/ruama.png" alt="Ruama">
          <p>Ruama</p>
        </div>

        <div>
          <img src="/src/assets/img/vinicius.png" alt="Vinícius">
          <p>Vinícius</p>
        </div>

        <div>
          <img src="/src/assets/img/vitoria.png" alt="Vitória">
          <p>Vitória</p>
        </div>
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

  .secao-carrossel {
    margin-top: 3rem;
    padding: 1rem;
    display: grid;
    max-width: 85%;
    justify-self: center;
    row-gap: 1rem;
  }

  .secao-carrossel-apresentacao {
    display: grid;
    row-gap: .5rem;

    & h2 {
      font-family: var(--fonte-principal);
      font-weight: 700;
    }

    & h3 {
      font-family: var(--fonte-principal);
      font-weight: 500;
    }
  }

  .swiper {
    width: 100%;
    height: auto;
    display: grid;
    column-gap: .5rem;
    align-items: center;
  }

  .swiper-slide {
    font-family: var(--fonte-principal);

    & img {
      width: 20rem;
    }

    & h6 {
      font-weight: 400;
      font-size: .8rem;
    }

    & p {
      font-weight: 500;
      font-size: 1.2rem;
    }
  }

  .secao-colaboradores {
    text-align: center;
    margin: 5rem 0;
    font-family: var(--fonte-principal);

    & h2 {
      font-weight: 700;
    }
  }

  .colaboradores-img{
    display: flex;
    margin-top: 3rem;
    padding: 1rem;
    max-width: 85%;
    justify-self: center;
    gap: 1rem;

    & img {
      width: 10rem;
      border-radius: 50%;
      object-fit: cover;
    }
}
</style>
