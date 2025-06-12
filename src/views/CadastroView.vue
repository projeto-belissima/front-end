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
                <button>ENVIAR</button>
            </div>
        </form>
    </main>
</template>

<style scoped>
    .titulo {
        text-align: center;
        font-family: var(--fonte-principal);
    }
    .container {
        display: grid;
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
        margin: 50px;
        font-family: var(--fonte-principal);
    }
</style>