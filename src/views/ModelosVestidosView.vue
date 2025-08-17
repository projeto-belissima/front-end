<script setup></script>

<template>
  <h1>Modelos de Vestido</h1>

  <div class="filtro">
    <label for="filtro">Procurar:</label>
    <input type="text" name="filtro" id="filtro">
  </div>

  <section class="tabela">
    <div class="linha-principal">
      <span> <p>Código</p> </span>
      <span class="coluna-maior"> <p>Tipo</p> </span>
      <span class="coluna-cor"> <p>Cores</p> </span>
      <span> <p>Valor~</p> </span>
      <span class="coluna-imagem"> <p>Foto</p> </span>
    </div>

    <div class="linha-secundaria">
      <span> <p>0001</p> </span>
      <span class="coluna-maior"> <p>Midi Liso</p> </span>
      <span class="coluna-cor"> <p>Marrom...</p> </span>
      <span> <p>R$ 200,00</p> </span>
      <span class="coluna-imagem"> <p> <img src="../assets/img/vestido-midi-marrom.png" alt="Vestido"> </p> </span>
    </div>

    <div class="linha-secundaria">
      <span> <p>0001</p> </span>
      <span class="coluna-maior"> <p>Midi Liso</p> </span>
      <span class="coluna-cor"> <p>Marrom, Preto, Branco, Cinza</p> </span>
      <span> <p>R$ 200,00</p> </span>
      <span class="coluna-imagem"> <p> <img src="../assets/img/vestido-midi-marrom.png" alt="Vestido"> </p> </span>
    </div>
  </section>

  <article class="tabela-rodape">
    <div class="tabela-rodape-botao"> <button>Adicionar Vestido</button> </div>

    <nav class="menu-paginas">
      <p class="menu-paginas-guia">1 de 5</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
      </svg>

      <div class="paginacao">
        <span class="selecionado">1</span>
        <span>2</span>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
      </svg>
    </nav>
  </article>
</template>

<style scoped>
  h1 {
    text-align: center;
    margin: 3rem 0;
    font-family: var(--fonte-principal);
  }

  .filtro {
    display: flex;
    gap: .5rem;
    justify-content: end;
    margin-right: 1rem;
    font-family: var(--fonte-principal);

    & input {
      border: 1px solid black;
      border-radius: 3px;
    }
  }

  .tabela {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    font-family: var(--fonte-principal);
    width: 100%;

    & div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      text-align: center;
      border-bottom: 1px solid black;

      & span {
        display: grid;
        align-items: center;
        width: 15%;
        padding: .5rem 0;
      }

      & span > p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      & span.coluna-maior {
        display: grid;
        justify-content: start;
        width: 40%;
      }
    }

    & div.linha-principal > span > p {
      font-size: 1.2rem;
      font-weight: 600;
    }

    & div.linha-secundaria > span.coluna-maior {
      justify-content: start;
    }

    & div.linha-secundaria:hover {
      background-color: var(--cor-cinza-auxiliar);
    }

    & div.linha-secundaria > span > p > img {
      width: 3rem;
      height: 3rem;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  .tabela-rodape {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin: 3rem 0;
    font-family: var(--fonte-principal);
  }

  .tabela-rodape-botao {
    display: grid;
    justify-content: center;
    align-content: center;

    & button {
      padding: .2rem 1.5rem;
      border: none;
      border-radius: 5px;
      background-color: black;
      color: white;
      font-family: var(--fonte-principal);
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: .2s;
    }

    & button:hover {
      background-color: white;
      color: black;
      border: 2px solid black;
    }
  }

  .menu-paginas {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    align-items: center;
    gap: .5rem;

    & p.menu-paginas-guia {
      grid-column: 1 / 4;
      text-align: center;
    }

    & svg {
      cursor: pointer;
    }
  }

  .paginacao {
    display: flex;
    gap: .5rem;

    & span {
      display: grid;
      justify-items: center;
      align-items: center;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 5px;
      background-color: var(--cor-cinza-auxiliar);
      cursor: pointer;
    }

    & span.selecionado {
      background-color: black;
      color: white;
      font-weight: 600;
    }
  }

  @media (max-width: 530px) {
    .tabela-rodape {
      grid-template-columns: 1fr;

      & nav.menu-paginas {
        grid-row: 1 / 2;
      }
    }

    .tabela > div > span {
      width: 20%
    }

    .tabela > div > span.coluna-imagem {
      display: none;
    }
  }

  @media (max-width: 410px) {
    .tabela > div > span.coluna-maior {
      width: 60%
    }

    .tabela > div > span.coluna-cor {
      display: none;
    }
  }
</style>
