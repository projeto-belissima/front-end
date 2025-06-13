<script setup>

</script>

<template>
  <main>
    <h2 class="titulo">Cadastro</h2>
    <form class="container">

      <div>
        <label>Nome social:</label>
        <input type="text">
      </div>

      <div>
        <label>E-mail:</label>
        <input type="email">
      </div>

      <div>
        <label>Telefone:</label>
        <input type="tel">
      </div>

      <section>
        <h3>Seção de endereço</h3>

        <div>
          <label>CEP:</label>
          <input type="text">
        </div>

        <div>
          <label>Número da moradia:</label>
          <input type="number">
        </div>

        <div>
          <label>Logradouro:</label>
          <input type="text">
        </div>

        <div>
          <label>Bairro:</label>
          <input type="text">
        </div>

        <div>
          <label>Cidade:</label>
          <input type="text">
        </div>

        <div>
          <label>Estado:</label>
          <input type="text">
        </div>
      </section>

      <div>
        <button type="submit">ENVIAR</button>
      </div>
    </form>
  </main>
</template>

<style scoped>
  .titulo {
    text-align: center;
    font-family: var(--fonte-principal);
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 10px;
    background-color: #f2f2f2;
    padding: 40px;
    margin: 50px auto;
    width: 100%;
    max-width: 600px;
    font-family: var(--fonte-principal);
    /* box-shadow: 0 4px 12px rgba(0,0,0,0.1);*/
  }

  .container div,
  .container section > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 15px;
  }

  label {
    font-size: 1.1rem;
    font-weight: 500;
    color: #333;
  }

  input {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    transition: border-color 0.2s ease;
  }

  input:focus {
    border-color: #007bff;
    outline: none
  }

  section {
    margin-top: 30px;
  }

  section h3 {
    margin-bottom: 15px;
    font-size: 1.2rem;
    color: #444;
  }

  button {
    padding: 12px 20px;
    font-size: 1rem;
    background: linear-gradient(135deg, var(--cor-marrom-1), #5c3c1f);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    align-self: center;
    transition: transform 0.1s ease, box-shadow 0.2s ease;
  }

  button:hover {
    background: linear-gradient(135deg, var(--cor-marrom-2), #4e2f18);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    .container {
      margin: 20px;
      padding: 20px;
    }
  }
</style>
