<script setup>

</script>

<template>
  <main class="box-login-page">
    <section class="login-section">
      <h2>Campo de Login</h2>
      <div>
          <label for="user-name">Nome de usuário:</label>
          <input type="text" name="user-name" id="user-name">
      </div>

      <div>
        <label for="user-password">Senha:</label>
        <input type="password" name="user-password" id="user-password">
      </div>

      <button>ENTRAR</button>

      <div>
        <p><a>Esqueceu a senha?</a></p>
        <p><a>Fazer o cadastro</a></p>
      </div>
    </section>
  </main>
</template>

<style scoped>
 .box-login-page {
    display: grid;
    padding: 5rem 2rem;
    justify-items: center;
    align-items: center;
  }

  .login-section {
    display: grid;
    justify-content: center;
    align-content: center;
    font-family: var(--fonte-principal);
    row-gap: 2rem;
    color: #000;
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 3rem;
    border: 1px solid black;
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
    width: 20vw;
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
