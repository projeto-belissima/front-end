<script setup>
import { ref, computed } from 'vue'
import LoginView from './LoginView.vue'
import { usarLoginConfig } from '@/stores/login';
import { useAuthStore } from '@/stores/auth'; // Importa a store de autenticação

const loginConfig = usarLoginConfig();
const authStore = useAuthStore();

// Computa se o usuário está logado e obtém os dados do usuário
const isLoggedIn = computed(() => authStore.loggedIn);
const user = computed(() => authStore.user);

// Estado reativo para controlar o dropdown
const showDropdown = ref(false);

// Função para alternar o dropdown
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
</script>

<template>
  <header>
    <div class="cabecalho-titulo">
      <h1>
        <RouterLink to="/">Belíssima</RouterLink>
      </h1>
    </div>


    <div class="cabecalho-links">

      <div v-if="isLoggedIn">
        <!-- Foto do usuário com dropdown -->
        <div @click="toggleDropdown">
          <img v-if="user.foto && user.foto.url" :src="user.foto.url" alt="perfil" class="icone-perfil-usuario" />
          <img v-else src="../assets/img/user.svg" alt="Sem foto" class="icone-perfil-usuario" />

          <div v-if="showDropdown" class="menu-dropdown">
            <p><router-link to="/perfil-usuario"><strong>{{ user.name }}</strong></router-link></p>
            <p class="email-dropdown"><router-link to="/perfil-usuario">{{ user.email }}</router-link></p>
            <router-link to="/logout" class="item-dropdown">logout</router-link>
          </div>
        </div>
      </div>

      <p v-else @click="loginConfig.abrirFecharCampo(loginConfig.valorVF)">entrar</p>

      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star"
        viewBox="0 0 16 16">
        <path
          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag"
        viewBox="0 0 16 16">
        <path
          d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
      </svg>
    </div>
  </header>

  <LoginView v-if="loginConfig.valorVF" />
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--cor-cinza-auxiliar);
  font-family: var(--fonte-principal);
}

.cabecalho-titulo h1 a {
  color: black;
  text-decoration: none;
  font-weight: 100;
  font-style: italic;
}

.cabecalho-links {
  display: flex;
  column-gap: 2rem;
  align-items: center;

  & a {
    color: #000;
    text-decoration: none;
  }

  & p {
    color: black;
    text-decoration: none;
    font-weight: 300;
    font-size: .8rem;
    cursor: pointer;
  }
}

.icone-perfil-usuario {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #000;
}

/* Dropdown menu */
.menu-dropdown {
  position: absolute;
  top: 50px;
  right: 10px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  z-index: 1000;
  min-width: 200px; /* Define um tamanho mínimo para o dropdown */
}

.menu-dropdown p {
  margin: 0;
  padding: 5px 0;
}

.item-dropdown {
  display: block;
  text-decoration: none;
  padding: 5px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.item-dropdown:hover {
  background-color: #f4f4f4;
}

/* Estilo específico para o email */
.email-dropdown {
  word-wrap: break-word; /* Garante que o e-mail quebre de forma adequada se for longo */
  font-size: 0.9rem;
  margin-bottom: 10px;
}
</style>
