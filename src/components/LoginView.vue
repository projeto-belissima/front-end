<script setup>
import "@passageidentity/passage-elements/passage-auth";
import { usarLoginConfig } from '@/stores/login';

import { ref, onMounted } from 'vue'

import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { useAuthStore } from '@/stores/auth';

const appId = import.meta.env.VITE_PASSAGE_APP_ID;
const loginConfig = usarLoginConfig();

const authStore = useAuthStore();
const psg_auth_token = ref('');
const copyMessageVisible = ref(false);

const getUserInfo = async () => {
  try {
    const authToken = localStorage.getItem('psg_auth_token');
    const passageUser = new PassageUser(authToken);
    const user = await passageUser.userInfo(authToken);
    psg_auth_token.value = authToken;
    if (user) {
      await authStore.setToken(authToken);
    } else {
      authStore.unsetToken();
    }
  } catch (error) {
    authStore.unsetToken();
  }
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(psg_auth_token.value).then(() => {
    copyMessageVisible.value = true;
    setTimeout(() => {
      copyMessageVisible.value = false;
    }, 2000);
  }).catch(err => {
    console.error('Erro ao copiar o token: ', err);
  });
};

onMounted(() => {
  getUserInfo();
})
</script>

<template>
  <main class="box-login-page">
    <section class="login-section">
      
      <button @click="copyToClipboard; loginConfig.abrirFecharCampo(loginConfig.valorVF)" class="botao-saida">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      </button>

      <h2>campo de login</h2>

      <div class="authContainer">
        <passage-auth :appId="appId"></passage-auth>
      </div>

    </section>
  </main>
</template>

<style scoped>
  .box-login-page {
    display: grid;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .6);
  }

  .login-section {
    display: grid;
    justify-content: center;
    justify-self: center;
    align-content: center;
    row-gap: 2rem;
    padding: 1.5rem;
    width: 350px;
    font-family: var(--fonte-principal);
    color: #000;
    background-color: #f2f2f2;
    border-radius: 5px;
    box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, .4);

    & h2 {
      text-align: center;
    }
  }

  .botao-saida {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: none;
    cursor: pointer;
  }

  .authContainer {
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
    text-align: center;
  }
</style>
