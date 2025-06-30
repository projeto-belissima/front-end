<script setup>
import { ref } from 'vue'

  const dias = ref([
    {id: 1, nome: "Domingo", alt: ""},
    {id: 2, nome: "Segunda", alt: ""},
    {id: 3, nome: "Terça", alt: ""},
    {id: 4, nome: "Quarta", alt: ""},
    {id: 5, nome: "Quinta", alt: ""},
    {id: 6, nome: "Sexta", alt: ""},
    {id: 7, nome: "Sábado", alt: ""},
  ])
  const status = ref([
    {id: 1, nome: "categoria", alt: ""},
    {id: 2, nome: "data de emissão", alt: ""},
    {id: 3, nome: "status", alt: ""},
    {id: 4, nome: "valor do produto", alt: ""},
    {id: 5, nome: "cliente", alt: ""},
  ])
  const infos = ref([
    {id: 1, nome: "categoria", alt: ""},
    {id: 2, nome: "data de emissão", alt: ""},
    {id: 3, nome: "status", alt: ""},
    {id: 4, nome: "valor do produto", alt: ""},
    {id: 5, nome: "cliente", alt: ""},
    {id: 6, nome: "categoria", alt: ""},
    {id: 7, nome: "data de emissão", alt: ""},
    {id: 8, nome: "status", alt: ""},
    {id: 9, nome: "valor do produto", alt: ""},
    {id: 10, nome: "cliente", alt: ""},
  ])
</script>

<template>

  <section class="header-dias">
    <ul class="dias-semana">
      <li v-for = "dia in dias" :key="dia.id" class = "item-cabeçalho">
                {{ dia.nome }}
      </li>
    </ul>
  </section>
  <section class="tabela">
    <ul class="tabela-status">
      <li v-for = "status in status" :key="status.id">
        {{ status.nome }}
      </li>
    </ul>
    <section class="tabela">
      <ul class="informacoes">
        <li v-for ="info in infos" :key="infos.id">
          {{ infos.name }}
        </li>
      </ul>
    </section>
  </section>
</template>
<style scoped>
.header-dias {
  display: grid;
  justify-content: center;
  text-align: center;
  width: 100%;

}

.dias-semana {
  display: flex;
  list-style-type: none;
  gap: 4rem;
  padding: 1rem;
}
.tabela {
  display: grid;
  justify-content: center;
}
.tabela-status {
  display: flex;
  list-style-type: none;
  margin-top: 2rem;
  gap: 4rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid black;
}
</style>
