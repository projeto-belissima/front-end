<script setup>
import { ref } from 'vue'

const vestido = ref({ 
    id: 1, 
    nome: "vestido midi com manga longa", 
    mediaPreco: "109.90", 
    img: "vestido-midi-marrom.png",
    alt: "" 
})

const imgUrl = (img) => new URL(`../assets/img/${img}`, import.meta.url).href;

</script>

<template>
    <h1>Teste</h1>

    <section class="vestido">
        <img :src="imgUrl(vestido.img)">
        <div class="informacoes">
        <h5 class="nome-produto">{{ vestido.nome }}</h5>
        <h5 class="valor-produto">{{ vestido.mediaPreco }}</h5>
        </div>
    </section>
</template>

<style scoped>

.vestido {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

</style>