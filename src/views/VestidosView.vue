<script setup>
import { ref } from 'vue'
import { useVestidoStore } from '@/stores/vestido'

const vestidoStore = useVestidoStore();
const vestido = ref({
  id: 1,
  nome: 'vestido midi com manga longa',
  descricao:
    'vestido midi preto de manga longa com decote ombro a ombro em malha justinha com caimento encorpado, elastano e fenda na perna',
  mediaPreco: '109.90',
  img: 'vestido-midi-marrom.png',
  alt: '',
  cores: 'marrom',
  medidas: '70cm'
})

const imgUrl = (img) => new URL(`../assets/img/${img}`, import.meta.url).href
</script>

<template>
  {{ vestidoStore }}
  <section class="vestido">

    <img :src="imgUrl(vestido.img)" />
    <div class="informacoes">
      <h5 class="nome-produto">{{ vestido.nome }}</h5>
      <p class="descricao">{{ vestido.descricao }}</p>
      <h5 class="valor-produto">R$ {{ vestido.mediaPreco.replace('.', ',') }}</h5>
      <h5 class="cores">cor: {{ vestido.cores }}</h5>
      <div class="selecao-cor">
        <div class="button botao-cor-selecionado"><button class="azul"></button></div>
        <div class="button"><button class="marrom"></button></div>
        <div class="button"><button class="rosa"></button></div>
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

.azul {
  background-color: blue;
}
.marrom {
  background-color: brown;
}
.rosa {
  background-color: palevioletred;
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
