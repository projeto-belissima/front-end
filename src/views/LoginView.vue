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
                <p><router-link to="/signup" exact>Fazer o cadastro</router-link></p>
            </div>
        </section>
    </main>
</template>

<style scoped>
 .box-login-page {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 5rem 2rem;
        justify-items: center;
        align-items: center;
      
    }

    .login-section {
        display: grid;
        justify-content: center;
        align-content: center;
        row-gap: 2rem;
        color: var(--vt-c-white);
        background-color: gray;
        border-radius: 15px;
        padding: 3rem;
        border: 2px solid black;
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
        border: 1px solid var(--vt-c-white);
        background-color: var(--vt-c-transparent);
        color: var(--vt-c-white);
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
        background-color: var(--vt-c-white);
        color: var(--vt-c-black);
    }

    .login-section button:hover {
        background-color: var(--vt-c-light-blue);
        color: var(--vt-c-white);
    }
    
    .login-section button:active {
        background-color: var(--vt-c-black);
        color: var(--vt-c-white);
    }

    .login-section div p a {
        color: var(--vt-c-white);
    }

    @media (max-width: 750px) {
        .box-login-page {
            grid-template-columns: auto;
        }

        .box-login-page img {
            display: none;
        }

        .login-section {
            background-color: black;
            color: var(--vt-c-dark-blue);
            padding: 0;
        }

        .login-section div input {
            border-color: #000;
            width: auto;
        }

        .login-section div input:focus {
            border-color: var(--vt-c-dark-blue);
        }

        .login-section button {
            background-color: var(--vt-c-light-blue);
            color: var(--v--vt-c-dark-blue);
        }

        .login-section div p a {
            color: var(--vt-c-dark-blue);
        }
    }
</style>
