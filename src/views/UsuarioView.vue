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

const editando = ref(false)

function alternarEdicao() {
  editando.value = !editando.value
}
</script>

<template>
  <h1>meu perfil</h1>

  <div class="perfil-container">
    <div class="infos">
      <p>nome completo:</p>
      <p>apelido:</p>
    </div>
    <div class="foto-container">
      <label for="upload">
        <img :src="fotoPerfil" alt="Imagem de perfil" class="foto" />
      </label>
      <input type="file" id="upload" accept="image/*" @change="selecionarFoto" hidden />
      <span class="dica">clique na foto para alterar</span>
    </div>
  </div>

  <div class="informacoes">
    <h2>minhas medidas</h2>
    <p>minhas medições ajuda a simplificar o processo de encontrar a sua adaptação perfeita!</p>
    
    <form @submit.prevent="alternarEdicao">
      <div>
        <label>altura:</label>
        <input type="number" :disabled="!editando" />
      </div>
      <div>
        <label>peso:</label>
        <input type="number" :disabled="!editando" />
      </div>
      <div>
        <label>busto:</label>
        <input type="number" :disabled="!editando" />
      </div>
      <div>
        <label>cintura:</label>
        <input type="number" :disabled="!editando" />
      </div>
      <div>
        <label>quadril:</label>
        <input type="number" :disabled="!editando" />
      </div>
      <div>
        <button type="submit">{{ editando ? 'salvar' : 'editar' }}</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  font-family: var(--fonte-principal);
  text-align: center;
  margin-top: 1.5rem;
}

div.informacoes {
  display: grid;
  width: 90%;
  justify-self: center;
  font-family: var(--fonte-corpo);
  font-size: medium;
  margin-top: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

form div {
  display: flex;
  align-items: center;
  gap: 1rem;
}

input {
  border: none;
  flex: 1;
  max-width: 300px;
}

input:disabled {
  background-color: #f0f0f0;
  color: #777;
  cursor: not-allowed;
}

.perfil-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  justify-self: center;
}

.foto-container {
  position: relative;
  text-align: right;
}

.foto-container .foto {
  width: 100%;
  max-width: 150px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  border: 3px solid var(--cor-marrom-1);
  transition: transform 0.2s box-shadow 0.2s;
}

.foto-container .foto:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0, 3);
}

.foto-container .dica {
  display: block;
  font-size: 0.8rem;
  font-family: var(--fonte-principal);
  color: #555;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .perfil-container {
    grid-template-columns: 1fr;
    text-align: left;
  }

  .foto-container {
    text-align: center;
  }
}

.infos p {
  font-size: 1.25rem;
  font-family: var(--fonte-corpo);
  margin: 0.3rem 0;
}

button {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background: #f5f5f5;
}


@media (max-width: 600px) {
  form div {
    flex-direction: column;
    align-items: flex-start;
  }

  input {
    width: 100%;
    max-width: none;
    margin-left: 0;
  }

  button {
    align-self: center;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 1.5rem;
  }

  .infos p {
    font-size: 1rem;
  }
}
</style>
