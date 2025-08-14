<script setup>
import { ref, onMounted } from 'vue'
import { useVestidoStore } from '@/stores/vestido'

const vestidoStore = useVestidoStore()
const filtro = ref('')

function buscarComFiltro() {
  vestidoStore.buscarVestidos(1, filtro.value)
}

function irPagina(pagina) {
  vestidoStore.buscarVestidos(pagina, filtro.value)
}

onMounted(() => {
  vestidoStore.buscarVestidos()
})

// const vestidos = ref([
//   {id: 1, nome: "vestido midi com manga longa", mediaPreco: "109.90", img: "vestido-midi-marrom.png", alt: ""},
//   {id: 2, nome: "vestido longo verde florido", mediaPreco: "109.90", img: "vestido-longo-verde-florido.png", alt: ""},
//   {id: 3, nome: "vestido sarja marrom", mediaPreco: "109.90", img: "vestido-sarja-marrom.png", alt: ""},
//   {id: 4, nome: "vestido midi com manga longa", mediaPreco: "109.90", img: "vestido-midi-marrom.png", alt: ""},
//   {id: 5, nome: "vestido longo verde florido", mediaPreco: "109.90", img: "vestido-longo-verde-florido.png", alt: ""},
//   {id: 6, nome: "vestido sarja marrom", mediaPreco: "109.90", img: "vestido-sarja-marrom.png", alt: ""},
//   {id: 7, nome: "vestido midi com manga longa", mediaPreco: "109.90", img: "vestido-midi-marrom.png", alt: ""},
//   {id: 8, nome: "vestido longo verde florido", mediaPreco: "109.90", img: "vestido-longo-verde-florido.png", alt: ""},
//   {id: 9, nome: "vestido sarja marrom", mediaPreco: "109.90", img: "vestido-sarja-marrom.png", alt: ""},
// ])

// const imgUrl = (img) => new URL(`../assets/img/${img}`, import.meta.url).href;
</script>

<template>
  <section class="secao-guia">
    <div class="guia-paginas">
      <p>página inicial</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
      </svg>
      <p><span>categoria</span></p>
    </div>

    <div class="guia-busca">
      <p>ordenar e filtrar</p>
    </div>
  </section>

  <h1>looks promo</h1>

  <input type="text" v-model="filtro" /><button @click="buscarComFiltro">Filtrar</button>
  <ul>
    <li v-for="vestido in vestidoStore.vestidos" :key="vestido.id">
      {{ vestido.descricao }} ({{ vestido.id }})
    </li>
  </ul>

  <div class="pagination">
    <span
      v-for="numeroPagina in vestidoStore.meta.total_pages"
      :key="numeroPagina"
      :class="numeroPagina == vestidoStore.meta.page ? 'selecionada' : ''"
      @click="irPagina(numeroPagina)"
    >
      {{ numeroPagina }}
    </span>
  </div>

  <!-- <main class="amostragem-vestidos">
      <div class="vestido-unidade" v-for="vestido in vestidos" :key="vestido.id">
        <img :src="imgUrl(vestido.img)" :alt="vestido.alt">
        <h6>{{ vestido.nome }}</h6>
        <p>R$ {{ vestido.mediaPreco.replace('.', ',') }}</p>
      </div>
  </main> -->
</template>

<style scoped>
  .secao-guia {
    display: grid;
    grid-template-rows: auto auto;
    font-family: var(--fonte-principal);
  }

  .guia-paginas {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: start;
    justify-items: center;
    gap: .8rem;
    background-color: var(--cor-cinza-auxiliar);
    padding: 1.2rem;
    padding-left: 2rem;
    font-weight: 300;

    & p > span {
      font-weight: 500;
    }
  }

  .guia-busca {
    display: grid;
    justify-content: end;
    padding: .7rem;
    padding-right: 2rem;
    font-weight: 300;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }

  h1 {
    text-align: center;
    padding: 2rem;
    font-family: var(--fonte-principal);
  }

  .amostragem-vestidos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 3rem;
    gap: 1rem .5rem ;
    justify-items: center;
  }

  .vestido-unidade {
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
</style>
