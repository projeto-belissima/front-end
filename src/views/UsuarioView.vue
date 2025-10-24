<script setup>
import { ref, watch, onMounted } from "vue"
import { useAuthStore } from '@/stores/auth'; // Importa a store de autenticação
import { useTelefoneStore } from "@/stores/telefone"

const authStore = useAuthStore();
const telefoneStore = useTelefoneStore()

const user = ref({
  id: null,
  name: '',
  email: '',
  foto: {
    url: '',
    description: '',
  }
});

const telefoneNumero = ref('')


// Montagem inicial
onMounted(async () => {
  await authStore.fetchUser()

  if (authStore.user && authStore.user.id) {
    // Garante que o campo foto nunca seja null
    const backendUser = authStore.user
    user.value = {
      id: backendUser.id || null,
      name: backendUser.name || '',
      email: backendUser.email || '',
      foto: backendUser.foto || { url: '', description: '' },
    }

    await telefoneStore.fetchTelefone()
    if (telefoneStore.telefone) {
      telefoneNumero.value = telefoneStore.telefone?.numero
    }
  }
})



// Sincroniza se o usuário mudar no store
watch(
  () => authStore.user,
  (newUser) => {
    if (newUser) {
      Object.assign(user.value, {
        id: newUser.id ?? user.value.id,
        name: newUser.name || "",
        email: newUser.email || "",
        foto: newUser.foto || { url: "", description: "" },
      })
    }
  }
)


// Salvar alterações de usuário
async function salvarAlteracoes() {
  try {
    if (!user.value.id) {
      alert("Usuário não identificado. Faça login novamente.")
      return
    }
    await authStore.updateUser(user.value)
    await authStore.fetchUser()
    await telefoneStore.saveTelefone(telefoneNumero.value)
    alert("Perfil atualizado com sucesso!")
  } catch (error) {
    console.error("Erro ao salvar:", error)
    alert("Erro ao salvar alterações.")
  }
}

// Atualizar foto localmente
function selecionarFoto(event) {
  const arquivo = event.target.files[0]
  if (arquivo) {
    if (!user.value.foto) user.value.foto = {}
    user.value.foto.url = URL.createObjectURL(arquivo)
  }
}

// Alternar modo de edição
const editando = ref(false)
function alternarEdicao() {
  editando.value = !editando.value
}
</script>

<template>
  <h1>meu perfil</h1>


  <div class="perfil-container">
    <form class="perfil-container-infos" @submit.prevent="alternarEdicao">
      <fieldset>
        <h3>informações gerais</h3>
        <div>
          <label>nome:</label>
          <input v-model="user.name" type="text" :disabled="!editando" />
        </div>
        <div>
          <label>email:</label>
          <input v-model="user.email" type="text" :disabled="!editando" />
        </div>
        <div>
          <label>telefone:</label>
          <input v-model="telefoneNumero" type="text" placeholder="(xx) xxxxx-xxxx" :disabled="!editando" />
        </div>
        <a @click="salvarAlteracoes">salvar</a>
        <a @click="salvarTelefone">saalvar telefone</a>
      </fieldset>

      <fieldset>
        <h3>endereço</h3>
        <div>
          <label>cep:</label>
          <input type="text" :disabled="!editando" />
        </div>
        <div>
          <label>número:</label>
          <input type="text" :disabled="!editando" />
        </div>
        <div>
          <label>logradouro:</label>
          <input type="text" :disabled="!editando" />
        </div>
        <div>
          <label>bairro:</label>
          <input type="text" :disabled="!editando" />
        </div>
        <div>
          <label>cidade:</label>
          <input type="text" :disabled="!editando" />
        </div>
        <div>
          <label>estado:</label>
          <input type="text" :disabled="!editando" />
        </div>
      </fieldset>

      <div>
        <button type="submit">{{ editando ? 'salvar' : 'editar' }}</button>
      </div>

    </form>

    <div class="foto-container">
      <label for="upload">
        <img :src="user?.foto?.url || '/img/padrao.png'" alt="Imagem de perfil" class="foto" />
      </label>
      <input type="file" id="upload" accept="image/*" @change="selecionarFoto" hidden />
      <span class="dica">clique na foto para alterar</span>
    </div>
  </div>

  <div class="informacoes">
    <h2>minhas medidas</h2>
    <p>minhas medições ajuda a simplificar o processo de encontrar a sua adaptação perfeita!</p>

    <form class="informacoes-formulario" @submit.prevent="alternarEdicao">
      <div>
        <label>altura:</label>
        <input type="text" :disabled="!editando" />
      </div>
      <div>
        <label>peso:</label>
        <input type="text" :disabled="!editando" />
      </div>
      <div>
        <label>busto:</label>
        <input type="text" :disabled="!editando" />
      </div>
      <div>
        <label>cintura:</label>
        <input type="text" :disabled="!editando" />
      </div>
      <div>
        <label>quadril:</label>
        <input type="text" :disabled="!editando" />
      </div>
      <div>
        <button type="submit">{{ editando ? 'salvar' : 'editar' }}</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.perfil-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  font-family: var(--fonte-principal);
  width: 90%;
  justify-self: center;
}

.perfil-container-infos>fieldset {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  & div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}

.foto-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.foto-container .foto {
  width: 100%;
  max-width: 15rem;
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
  font-family: var(--fonte-principal);
  font-size: medium;
  margin-top: 2rem;
}

.informacoes-formulario {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.informacoes-formulario div {
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

@media (max-width: 768px) {
  .perfil-container {
    display: flex;
    flex-direction: column-reverse;
  }

  .foto-container {
    text-align: center;
  }
}

.perfil-container-infos>fieldset {
  border: none;
}

.perfil-container-infos p {
  font-size: 1.25rem;
  text-transform: lowercase;
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

  .perfil-container-infos p {
    font-size: 1rem;
  }
}
</style>
