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
</script>

<template>
  <section class="secao-guia">
    <div class="guia-paginas">
      <a href="./HomeView.vue">página inicial</a>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
      </svg>
      <p><span>pesquisa</span></p>
    </div>

    <div class="guia-busca">
      <input type="text" v-model="filtro" /><button @click="buscarComFiltro">Filtrar</button>
    </div>
  </section>

  <h1>acervo de vestidos</h1>

  <main class="amostragem-vestidos">
      <div class="vestido-unidade" v-for="vestido in vestidoStore.vestidos" :key="vestido.id">
        <img :src="vestido.capa[0].url" :alt="vestido.descricao">
        <h6>Vestido {{ vestido.descritivo }} {{ vestido.cor }}</h6>
        <p>R$ {{ vestido.media_preco.replace('.', ',') }}</p>
      </div>
  </main>

  <div class="paginacao">
    <p>você está na página {{ vestidoStore.meta.page }} de {{ vestidoStore.meta.total_pages }}</p>
    <div>
      <span
        v-for="numeroPagina in vestidoStore.meta.total_pages"
        :key="numeroPagina"
        :class="numeroPagina == vestidoStore.meta.page ? 'selecionada' : ''"
        @click="irPagina(numeroPagina)"
      >
        {{ numeroPagina }}
      </span>
    </div>

  </div>
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

    & a {
      color: black;
      text-decoration: none;
    }

    & p > span {
      font-weight: 500;
    }
  }

  .guia-busca {
    display: flex;
    justify-content: end;
    gap: .5rem;
    padding: .7rem;
    padding-right: 2rem;
    font-weight: 300;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    & button {
      font-family: var(--fonte-principal);
      background-color: white;
      border: none;
      cursor: pointer;
    }

    & button:hover {
      text-decoration: underline;
    }
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

  .paginacao {
    display: grid;
    grid-template-rows: auto auto;
    row-gap: .5rem;
    justify-content: center;
    font-family: var(--fonte-principal);
    margin-bottom: 1rem;

    & div {
      display: flex;
      justify-content: center;
    }

    & div > span {
      display: grid;
      justify-items: center;
      align-items: center;
      height: 28px;
      width: 30px;
      border-radius: 5px;
      cursor: pointer;
    }

    & div > span:hover {
      opacity: .8;
    }
  }

  .selecionada {
    background-color: black;
    color: white;
    font-weight: bolder;
  }
</style>
