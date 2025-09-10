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
  <section class="grafico">
    <section class="lucro">
    <h3>Lucro do dia</h3>
    <p>R$ 3.000</p>
    <section class="grafico-img"><img src="/src/assets/img/grafico-de-rosca.png" alt="grafico" height="200px"></section>
  </section>
  </section>

  <section class="valor-info">
    <section class="valores">
      <h5>Total recebido</h5>
      <p>100,00</p>
    </section>
    <section class="valor-info">
      <section class="valores">
      <h5>Total Despesas </h5>
      <p>65,00</p>
    </section>
    </section>
  </section>
</template>
<style scoped>

.header-dias {
  display: grid;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 1rem;
}


.dias-semana {
   display: flex;
  list-style-type: none;
  gap: 2rem;
  padding: 1rem;
  font-size: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.tabela {
  display: flex;
  justify-content: center;
  padding: 2rem;
  overflow-x: auto;
}

.tabela table {
  width: 100%;
  max-width: 1000px;
  border: 2px solid black;
  border-radius: 10px;
  border-collapse: collapse;

}

.tabela th,
td {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  text-align: left;
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
  border: none;
  padding: 0.5rem 1rem;
}

.options {
  height: 2rem;
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  border: none;
}

.options-menu {
  background-color: #ff0000;
  color: white;
  border: none;
}
.grafico{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
}
.lucro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 2rem;
  border-radius: 2rem;
  width: 100%;
  max-width: 700px;
  background-color: rgb(207, 166, 166);
  font-size: 1.5rem;
}

.valores {
  background-color: rgb(156, 153, 153);
  padding: 2rem;
  border-radius: 2rem;
  font-size: 1.5rem;
  margin: 1rem;
  width: 100%;
  max-width: 500px;
  text-align: center;
}
.valor-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;


}
.grafico-img {
  grid-column: 2 / 3;
  grid-row: 1 / 5;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 768px) {
  .lucro {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
.grafico-img {
    grid-column: 1 / -1;
    grid-row: auto;
  }


</style>
