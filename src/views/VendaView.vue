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
  {id: 4, email_usuario: 'a@a.com', valor: 'R$ 700,00', status: 'Em encomenda'},
  {id: 5, email_usuario: 'a@a.com', valor: 'R$ 700,00', status: 'Em encomenda'},
  {id: 6, email_usuario: 'a@a.com', valor: 'R$ 700,00', status: 'Em encomenda'},
  {id: 7, email_usuario: 'a@a.com', valor: 'R$ 700,00', status: 'Em encomenda'},
  {id: 8, email_usuario: 'a@a.com', valor: 'R$ 700,00', status: 'Em encomenda'},
  {id: 9, email_usuario: 'a@a.com', valor: 'R$ 700,00', status: 'Em encomenda'},
  {id: 10, email_usuario: 'a@a.com', valor: 'R$ 700,00', status: 'Em encomenda'},
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
  <section class="lucro">
    <h3>Lucro do dia</h3>
    <p>R$ 3.000</p>
    <img src="/src/assets/img/grafico.jpg" alt="grafico" height="200px">
  </section>
</template>
<style scoped>
.header-dias {
  display: grid;
  justify-content: center;
  text-align: center;
  width: 100%;
  border: 1px solid black;
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
  padding: 2rem;
  border: 1px solid black;

}

.tabela table {
  width: 90%;
  border: 2px solid black;
  border-radius: 10px;

}

.tabela th,
td {
  padding: 30px;
  border-bottom: 5px solid #ddd;
}

.tabela tr:nth-child(even) {
  background-color: #f2f2f2;
}
.tabela tr:hover {
  background-color: rgb(207, 166, 166);
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
.lucro {
  display: grid;
  padding: 2rem;
  border: 1px solid black;
  border-radius: 2rem;
  width: 50%;
}
</style>
