<script setup>
import { ref, onMounted } from 'vue'

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import { RouterLink } from 'vue-router';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const psg_auth_token = ref('');


const getUserInfo = async () => {
  try {
    const authToken = localStorage.getItem('psg_auth_token');
    const passageUser = new PassageUser(authToken);
    const user = await passageUser.userInfo(authToken);
    psg_auth_token.value = authToken;
    if (user) {
      await authStore.setToken(authToken);
    } else {
      authStore.unsetToken();
    }
  } catch (error) {
    authStore.unsetToken();
    console.error(error)
  }
};


const stories = ref([
  { id: 1, nome: "novidades", img: "quadrado-marrom.png", alt: "" },
  { id: 2, nome: "longos", img: "quadrado-marrom.png", alt: "" },
  { id: 3, nome: "midis", img: "quadrado-marrom.png", alt: "" },
  { id: 4, nome: "curtos", img: "quadrado-marrom.png", alt: "" },
])

const destaques = ref([
  { id: 1, nome: "vestido midi com manga longa", mediaPreco: "109.90", img: "vestido-midi-marrom.png", alt: "" },
  { id: 2, nome: "vestido longo verde florido", mediaPreco: "109.90", img: "vestido-longo-verde-florido.png", alt: "" },
  { id: 3, nome: "vestido sarja marrom", mediaPreco: "109.90", img: "vestido-sarja-marrom.png", alt: "" },
  { id: 4, nome: "vestido midi com manga longa", mediaPreco: "109.90", img: "vestido-midi-marrom.png", alt: "" },
  { id: 5, nome: "vestido longo verde florido", mediaPreco: "109.90", img: "vestido-longo-verde-florido.png", alt: "" },
  { id: 6, nome: "vestido sarja marrom", mediaPreco: "109.90", img: "vestido-sarja-marrom.png", alt: "" },
  { id: 7, nome: "vestido midi com manga longa", mediaPreco: "109.90", img: "vestido-midi-marrom.png", alt: "" },
  { id: 8, nome: "vestido longo verde florido", mediaPreco: "109.90", img: "vestido-longo-verde-florido.png", alt: "" },
  { id: 9, nome: "vestido sarja marrom", mediaPreco: "109.90", img: "vestido-sarja-marrom.png", alt: "" },
]);

const colaboradores = ref([
  {id: 1, nome: 'Ester', img: 'ester.png', github: 'https://github.com/antuneseds'},
  {id: 2, nome: 'Renata', img: 'renata.png', github: 'https://github.com/ReehLimas'},
  {id: 3, nome: 'Ruama', img: 'ruama.png', github: 'https://github.com/bernardesraischruama'},
  {id: 4, nome: 'Vinícius', img: 'vinicius.png', github: 'https://github.com/ViniRech'},
  {id: 5, nome: 'Vitória', img: 'vitoria.png', github: 'https://github.com/fernandapadilha'}
])

const imgUrl = (img) => new URL(`../assets/img/${img}`, import.meta.url).href;

onMounted(() => {
  getUserInfo();
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
      520: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      700: {
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
      <RouterLink to="/selecao-vestidos" class="secao-stories-story" v-for="story in stories" :key="story.id">
        <img :src="imgUrl(story.img)" :alt="story.alt">
        <h5>{{ story.nome }}</h5>
      </RouterLink>
    </section>

    <section class="secao-carrossel">
      <article class="secao-carrossel-apresentacao">
        <h2>aproveitando nosso querido outono</h2>
        <h3>confira já!</h3>
      </article>

      <div class="swiper">

        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="destaque in destaques" :key="destaque.id">
            <img :src="imgUrl(destaque.img)" :alt="destaque.alt">
            <h6>{{ destaque.nome }}</h6>
            <p>R$ {{ destaque.mediaPreco.replace('.', ',') }}</p>
          </div>
        </div>

        <div class="swiper-button-prev">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left-short"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
          </svg>
        </div>
        <div class="swiper-button-next">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-short"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
          </svg>
        </div>

      </div>
    </section>

    <section class="secao-colaboradores">
      <h2>quem somos nós?</h2>

      <div class="colaboradores-img">
        <div v-for="colaborador in colaboradores" :key="colaborador.id">
          <a :href="colaborador.github">
            <img :src="imgUrl(colaborador.img)" :alt="colaborador.nome">
            <p>{{ colaborador.nome }}</p>
          </a>
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
  text-decoration: none;

  & img {
    width: 7rem;
    border-radius: 50%;
  }

  & h5 {
    font-family: var(--fonte-principal);
    font-size: 1rem;
    font-weight: 400;
    color: black;
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
    width: 25vw;
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

.swiper-button-prev,
.swiper-button-next {
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
  color: black;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  content: none;
}

.secao-colaboradores {
  display: grid;
  text-align: center;
  margin: 5rem 0;
  font-family: var(--fonte-principal);

  & h2 {
    font-weight: 700;
  }
}

.colaboradores-img {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-top: 3rem;
  justify-self: center;
  gap: 1rem;

  & a {
    text-decoration: none;
    color: black;
  }

  & img {
    width: 10rem;
    border-radius: 50%;
    object-fit: cover;
  }
}

@media (max-width: 890px) {
  .colaboradores-img {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 700px) {
  .swiper-slide img {
    width: 35vw;
  }
}

@media (max-width: 550px) {
  .colaboradores-img {
    grid-template-columns: 1fr;
  }

  .secao-stories-story img {
    width: 15vw;
  }
}

@media (max-width: 520px) {
  .swiper-slide img {
    width: 80vw;
  }

  .secao-stories-story h5 {
    font-size: 4vw;
  }
}
</style>
