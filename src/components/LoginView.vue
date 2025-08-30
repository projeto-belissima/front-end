<script setup>
import { usarLoginConfig } from '@/stores/login';
const loginConfig = usarLoginConfig();
</script>

<template>
  <main class="box-login-page">
    <section class="login-section">
      <button @click="loginConfig.abrirFecharCampo(loginConfig.valorVF)" class="botao-saida">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      </button>

      <h2>campo de login</h2>
      <div>
          <label for="user-name">nome de usuário:</label>
          <input type="text" name="user-name" id="user-name">
      </div>

      <div>
        <label for="user-password">senha:</label>
        <input type="password" name="user-password" id="user-password">
      </div>

      <button class="botao-envio">ENTRAR</button>

      <div>
        <p><a>esqueceu a senha?</a></p>
        <p><Router-Link to="/cadastro">fazer o cadastro</Router-Link></p>
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
  }

  .botao-saida {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: none;
    cursor: pointer;
  }

  .login-section h2, .login-section div p {
    text-align: center;
  }

  .login-section div {
    display: grid;
    grid-template-rows: auto auto;
    row-gap: .5rem;
  }

  .login-section div input {
    padding: .5rem;
    border: 1px solid #000;
    background-color: var(--vt-c-transparent);
    color: #000;
    border-radius: 6px;
  }

  .login-section div input:focus {
    outline: 0;
    border: 2px solid;
  }

  .botao-envio {
    padding: .5rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    background-color: #00000098;
    color: #fff;
  }

  .botao-envio:hover {
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }

  .login-section div p a {
    color: #000;
  }

  .login-section div p a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
</style>
