<script setup>
import { ref} from 'vue'

    const dias = ref([
  {id: 1, nome: "Domingo", alt: ""},
  {id: 2, nome: "Segunda", alt: ""},
  {id: 3, nome: "Terça", alt: ""},
  {id: 4, nome: "Quarta", alt: ""},
  {id: 5, nome: "Quinta", alt: ""},
  {id: 6, nome: "Sexta", alt: ""},
  {id: 7, nome: "Sábado", alt: ""},
 
])
</script>

<template>
    
    <section class="header-dias">
        <table> 
      <tr> 
        <th v-for = "dia in dias" :key="dia.id" class = "item-cabeçalho">
           {{ dia.nome }} 
        </th>
        </tr> 
        </table>     
    </section>
</template>
<style scoped>
.header-dias {
    display: flex;
    gap: 1.5rem;
    width: 100%;
    margin-top: 3rem;
    padding: 1rem;
    justify-content: center;
  }
.header-dias table{
    margin: 2rem;
}
</style>