<script setup>
import { ref } from "vue"
import icone from "@/assets/img/icone-de-pessoa.png"

const fotoPerfil = ref(icone)

function selecionarFoto(event) {
  const arquivo = event.target.files[0]
  if (arquivo) {
    fotoPerfil.value = URL.createObjectURL(arquivo)
  }
}
</script>


<template>
  <h1>Meu perfil</h1>

  <div class="perfil-container">
    <div class="infos">
      <p>Nome completo:</p>
      <p>Apelido:</p>
    </div>
    <div class="foto-container">
      <label for="upload">
          <img :src="fotoPerfil" alt="Imagem de perfil" class="foto" />
      </label>
      <input type="file" id="upload" accept="image/*" @change="selecionarFoto" hidden />
      <span class="dica">Clique na foto para alterar</span>
    </div>
  </div>
  <div class="informacoes">
    <h2>Preferências</h2>
    <p>Quais são suas categorias favoritas?</p>
    <ul class="informacoes">
      <li>curto</li>
      <li>midi</li>
      <li>longo</li>
      <li>noiva</li>
      <li>festa</li>
    </ul>
  </div>
  <div>
    <h2>Minhas medidas</h2>
    <p>Minhas Medições ajuda a simplificar o processo de encontrar a sua adaptação perfeita!</p>
    <ul class="informacoes">
      <li>altura:</li>
      <li>peso</li>
      <li>busto:</li>
      <li>cintura:</li>
      <li>quadril:</li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-size: 3rem;
  font-family: var(--fonte-principal);
  text-align: center;
}

.informacoes {
  font-family: var(--fonte-corpo);
  font-size: medium;
  padding: auto;
}

.perfil-container {
  display: flex;
  align-items: center;
  gap: 50rem;
  margin-top: 1rem;
  margin-left: 6rem;
}

.foto-container {
  position: relative;
  text-align: right;
}

.foto-container .foto {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  border: 3px solid var(--cor-marrom-1);
  transition: transform 0.2s box-shadow 0.2s;
}

.foto-container .foto:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(0,0,0,0,3);
}

.foto-container .dica {
  display: block;
  font-size: 0.8rem;
  font-family: var(--fonte-principal);
  color: #555;
  margin-top: 0.5rem;
}

.infos p {
  font-size: 1.25rem;
  font-family: var(--fonte-corpo);
  margin: 0.3rem 0;
}
</style>
