<script setup>
import { ref } from 'vue'

const vestido = ref({
  id: 1,
  nome: 'vestido midi com manga longa',
  descricao:
    'vestido midi preto de manga longa com decote ombro a ombro em malha justinha com caimento encorpado, elastano e fenda na perna.',
  mediaPreco: '109.90',
  img: 'vestido-midi-marrom.png',
  alt: '',
  cores: 'marrom',
  medidas: '70cm'
})

const imgUrl = (img) => new URL(`../assets/img/${img}`, import.meta.url).href
</script>

<template>
  <section class="vestido">
    <img :src="imgUrl(vestido.img)" />
    <div class="informacoes">
      <h5 class="nome-produto">{{ vestido.nome }}</h5>
      <p class="descricao">{{ vestido.descricao }}</p>
      <h5 class="valor-produto">R$ {{ vestido.mediaPreco.replace('.', ',') }}</h5>
      <h5 class="cores">Cor: {{ vestido.cores }}</h5>
      <div class="selecao-cor">
        <div class="button"><button class="azul botao-cor-selecionado"></button></div>
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
  margin-top: 2rem;

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
}

.selecao-cor {
  display: flex;
  gap: .5rem;

  & div.button {
    display: grid;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 40px;
    border: 1px solid gray;
    border-radius: 15px;
  }

  & div > button {
    height: 20px;
    width: 35px;
    border-radius: 15px;
    border: none;
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
</style>
