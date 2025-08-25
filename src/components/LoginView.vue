<script setup></script>

<template>
  <main class="box-login-page">
    <section class="login-section">
      <h2>campo de login</h2>
      <div>
          <label for="user-name">nome de usuário:</label>
          <input type="text" name="user-name" id="user-name">
      </div>

      <div>
        <label for="user-password">senha:</label>
        <input type="password" name="user-password" id="user-password">
      </div>

      <button>ENTRAR</button>

      <div>
        <p><a>esqueceu a senha?</a></p>
        <p><Router-Link to="/cadastro">fazer o cadastro</Router-Link></p>
      </div>
    </section>
  </main>
</template>

<style scoped>
  .box-login-page {
    width: 100vw;
    position: fixed;
    top: 30px;
    z-index: 999;
    justify-content: center;
  }

  .login-section {
    display: grid;
    justify-content: center;
    align-content: center;
    row-gap: 2rem;
    padding: 1.5rem;
    width: 350px;
    font-family: var(--fonte-principal);
    color: #000;
    background-color: #f2f2f2;
    border-radius: 5px;
    box-shadow: 2px 2px 4px 3px rgba(0, 0, 0, .4);
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

  .login-section button {
    padding: .5rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    background-color: #00000098;
    color: #fff;
  }

  .login-section button:hover {
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
