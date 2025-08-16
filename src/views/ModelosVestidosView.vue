<script setup></script>

<template>
  <h1>Modelos de Vestido</h1>

  <div class="filtro">
    <label for="filtro">Procurar:</label>
    <input type="text" name="filtro" id="filtro">
  </div>

  <section class="tabela">
    <div class="linha-principal">
      <p>Código</p>
      <p class="coluna-maior">Tipo</p>
      <p>Cores</p>
      <p>Valor~</p>
      <p>Foto</p>
    </div>

    <div class="linha-secundaria">
      <p>0001</p>
      <p>Midi Liso</p>
      <p>Marrom, Preto</p>
      <p>R$ 200,00</p>
      <p><img src="../assets/img/vestido-midi-marrom.png" alt="Vestido"></p>
    </div>

    <div class="linha-secundaria">
      <p>0001</p>
      <p>Midi Liso</p>
      <p>Marrom, Preto</p>
      <p>R$ 200,00</p>
      <p><img src="../assets/img/vestido-midi-marrom.png" alt="Vestido"></p>
    </div>
  </section>

  <article class="tabela-rodape">
    <button>Adicionar Vestido</button>

    <nav class="menu-paginas">
      <p>1 de 5</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
      </svg>

      <div class="paginacao">
        <span>1</span>
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
img {
  width: 10px;
}

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
</style>
