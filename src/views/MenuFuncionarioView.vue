<script setup></script>

<template>
  <main>
    <nav class="navegacao">
      <h3>NAVEGAÇÃO</h3>

      <ul class="navegacao-links">
        <li>
          <img src="../assets/img/coin.svg" alt="Cifrão">
          <p> <RouterLink to="/vendas">Lucro</RouterLink> </p>
        </li>
        <li>
          <img src="../assets/img/dress.svg" alt="Vestido">
          <p> <RouterLink to="/modelos-vestidos">Vestidos</RouterLink> </p>
        </li>
        <li>
          <img src="../assets/img/list.svg" alt="Lista">
          <p>Histórico</p>
        </li>
        <li>
          <img src="../assets/img/user.svg" alt="Perfil">
          <p>Funcionários</p>
        </li>
      </ul>
    </nav>

    <section class="secao-perfil">
      <div class="perfil-foto">
        <img src="../assets/img/vinicius.png" alt="Foto de perfil">
      </div>

      <div class="perfil-dados">
        <p>Vinícius Rech - 999.999.999-32</p>
        <p>Administrativo</p>
        <p>Gerente</p>
        <p>Ativo</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
  main {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    font-family: var(--fonte-principal);
    margin: 3rem 2rem 0;
    border-radius: 6px;
    box-shadow: 2px 2px 4px 3px rgba(0, 0, 0, .4);
  }

  .navegacao {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    border-right: 1px solid black;
  }

  .navegacao-links {
    display: grid;
    gap: 1rem;
    list-style-type: none;

    & li {
      display: flex;
      gap: .5rem;
      align-items: center;
    }

    & li > img {
      width: 1rem;
    }

    & li > p > a {
      text-decoration: none;
      color: #000;
    }
  }

  .secao-perfil {
    display: grid;
    gap: 1rem;
    padding: 1rem;
  }

  .perfil-foto {
    display: flex;
    justify-content: center;

    & img {
      width: 40%;
      border-radius: 50%;
    }
  }

  .perfil-dados {
    display: grid;
    gap: .5rem;
    padding: .5rem;
  }

  @media (max-width: 470px) {
    main {
      display: flex;
      flex-direction: column-reverse;
      margin: 3rem 0.5rem 0;
    }

    .navegacao {
      border-top: 1px solid black;
      border-right: 0;
    }
  }
</style>
