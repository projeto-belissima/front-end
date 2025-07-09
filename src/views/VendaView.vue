<script setup>
import { ref } from 'vue'

const dias = ref([
  { id: 1, nome: 'Domingo', alt: '' },
  { id: 2, nome: 'Segunda', alt: '' },
  { id: 3, nome: 'Terça', alt: '' },
  { id: 4, nome: 'Quarta', alt: '' },
  { id: 5, nome: 'Quinta', alt: '' },
  { id: 6, nome: 'Sexta', alt: '' },
  { id: 7, nome: 'Sábado', alt: '' },
])

const produtos = ref([
  {id: 1, email_usuario: 'a@a.com', valor: 'R$ 700,00', status: 'Em encomenda'},
  {id: 2, email_usuario: 'a@a.com', valor: 'R$ 700,00', status: 'Em encomenda'},
  {id: 3, email_usuario: 'a@a.com', valor: 'R$ 700,00', status: 'Em encomenda'},
  {id: 4, email_usuario: 'a@a.com', valor: 'R$ 700,00', status: 'Em encomenda'}
])
</script>

<template>
  <section class="header-dias">
    <ul class="dias-semana">
      <li v-for="dia in dias" :key="dia.id" class="item-cabeçalho">
        {{ dia.nome }}
      </li>
    </ul>

  </section >

  <section class="tabela">
    <table>

      <tr>
        <th>Produto</th>
        <th>Cliente</th>
        <th>Valor</th>
        <th>Status</th>
      </tr>

      <tr v-for="produto in produtos" :key="produto.id">
        <td>{{ produto.id }}</td>
        <td>{{ produto.email_usuario }}</td>
        <td>{{ produto.valor }}</td>
        <td>{{ produto.status }}</td>
      </tr>

    </table>
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
  justify-items: center;
  padding: 3rem;
}

.tabela table {
  border-collapse: collapse;
  width: 70%;
}

.tabela th,
td {
  padding: 30px;
  border-bottom: 2px solid #ddd;
}
.tabela h4 {
  height: 4rem;
}

.tabela tr:nth-child(even) {
  background-color: #f2f2f2;
}
.tabela tr:hover {
  background-color: rgb(255, 200, 200);
}

.button {
  background-color: #ff0000;
  color: white;
  border-radius: 30px;
  border: #ff0000;
}
.options {
  height: 1.5rem;
  width: 30rem;
  border-radius: 1.5px;
  border: none;
}

.options-menu {
  background-color: #ff0000;
  color: white;
  border: none;
}
</style>
