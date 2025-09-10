<script setup>
import { onMounted, ref } from 'vue'
import { useVestidoStore } from '@/stores/vestido'

const props = defineProps(['id']);
const vestido = ref({});
const vestidoStore = useVestidoStore();

onMounted(async () => {
  await vestidoStore.buscarVestidos()
  vestido.value = vestidoStore.pegarVestidoPorId(props.id)
})
</script>

<template>
  <section class="vestido" v-if="vestido">

    <img :src="vestido.capa[0].url" />
    <div class="informacoes">
      <h5 class="nome-produto">{{ vestido.descritivo }}</h5>
      <p class="descricao">{{ vestido.descricao }}</p>
      <h5 class="valor-produto">R$ {{ vestido.media_preco.replace('.', ',') }}</h5>
      <h5 class="cores">cor: {{ vestido.cores[0].nome }}</h5>
      <div class="selecao-cor">
        <div v-for="cor in vestido.cores" :key="cor.id" class="button">
          <button :style="{ 'background-color': cor.hex }"></button>
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
