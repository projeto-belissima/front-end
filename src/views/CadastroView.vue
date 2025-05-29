<script setup>

</script>

<template>
    <main>
        <h2>Cadastro</h2>
        <form>
            <div>
                <label>Nome social:</label>
                <input type="text">
            </div>
            <div>
                <label>E-mail:</label>
                <input type="email">
            </div>
            <div>
                <label>Gênero:</label>
                <select name="genero" id="genero-input">
                    <option value="F">Feminino</option>
                    <option value="M">Masculino</option>
                    <option value="O">Outro</option>
                    <option value="P">Prefiro não informar</option>
                </select>
            </div>
            <div>
                <label>Data de nascimento:</label>
                <input type="date">
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

</style>