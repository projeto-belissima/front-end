<script setup>
import { onMounted, ref } from 'vue'
import { useVestidoStore } from '@/stores/vestido'
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const props = defineProps(['id']);
const vestido = ref({
  descritivo: '',
  descricao: '',
  media_preco: '0',
  cores: [],
  capa: [{
    url: '',
    description: '',
  }],
});
const vestidoStore = useVestidoStore();

function formataPreco(preco) {
  return preco.replace('.', ',')
}

const idCor = ref(0);
function mostrarCor(index) {
  return idCor.value = index
}

onMounted(async () => {
  await vestidoStore.buscarVestidos()
  vestido.value = vestidoStore.pegarVestidoPorId(props.id)

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
      slidesPerView: 1,
      spaceBetween: 20
    }
  });

})
</script>

<template>
  <!-- {{ vestido }} -->

  <section class="vestido" v-if="vestido">

    <div class="swiper">

      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(imagem, index) in vestido?.capa" :key="index">
          <img :src="imagem?.url" :alt="imagem?.description">
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

    <div class="informacoes">
      <h5 class="nome-produto">{{ vestido.descritivo }}</h5>
      <p class="descricao">{{ vestido.descricao }}</p>
      <h5 class="valor-produto">R$ {{ formataPreco(vestido.media_preco) }}</h5>
      <h5 class="cores">cor: {{ vestido.cores.find(cor => cor.id === idCor)?.nome }}</h5>
      <div class="selecao-cor">
        <div v-for="cor in vestido.cores" :key="cor.id" class="button">
          <button @click="mostrarCor(cor.id)" :style="{ 'background-color': cor.hex }"></button>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.vestido {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem 1rem 1rem;
  gap: 1rem;

  & img {
    justify-self: center;
    width: 40%;
  }

  & div.informacoes {
    padding-right: 10rem;
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
  display: grid;
  justify-content: center;

  & img {
    width: 25vw;
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

.nome-produto {
  font-family: var(--fonte-principal);
  font-size: 1.3rem;
  font-weight: 500;
}

.descricao {
  font-family: var(--fonte-principal);
  font-size: 1rem;
  font-weight: 300;
  margin-top: 0.7rem;
  text-transform: lowercase;
}

.valor-produto {
  font-family: var(--fonte-principal);
  font-size: 2rem;
  margin-top: 2rem;
}

.cores {
  font-family: var(--fonte-principal);
  font-size: 1rem;
  font-weight: 300;
  margin: .5rem 0;
  text-transform: lowercase;
}

.selecao-cor {
  display: flex;
  gap: .5rem;

  & div.button {
    display: grid;
    justify-content: center;
    align-items: center;
    height: fit-content;
    border: 2px solid var(--cor-cinza-auxiliar);
    border-radius: 15px;
  }

  & div.botao-cor-selecionado {
    box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.6);
  }

  & div > button {
    height: 20px;
    width: 35px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
  }
}

@media(max-width: 840px) {
  .vestido {
    grid-template-columns: 1fr;

    & div.informacoes {
      padding: 0;
    }
  }
}

@media(max-width: 430px) {
  .vestido {
    padding: 0;

    & img {
      width: 100vw;
    }

    & div.informacoes {
      width: 100vw;
      padding: 0 1rem;
    }
  }
}
</style>
