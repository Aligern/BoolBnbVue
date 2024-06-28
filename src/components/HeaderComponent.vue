<template>
    <header class="container">
        <nav class="d-flex justify-content-between align-items-center p-">

                <div class="logo">
                    <img src="/src/assets/img/Immagine_2024-06-26_160710-removebg-preview.png" alt="">
                </div>

            <div class="text-center">
                <h1>Bool <br> 'n' <br> Bubbles</h1>
            </div>

            <div class="text-center">
                <p>
                    <a href="#">Registrati</a> <br> o <br> <a href="#">Accedi</a>
                </p>
            </div>
        </nav>
        <br>
        <div class="ls-line"></div>
    </header>

    <div>
        
    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent',
    }
</script>

<style lang="scss" scoped>

header {
    min-height: 100px;
}
nav {
    min-height: 90px;
}

form {
    transform: translate(0%, 130%);
    transition: all 1s;
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 25px;
    padding: 5px;
    border: 1px solid black;
}

input {
        width: 100%;
        height: 42.5px;
        line-height: 30px;
        outline: 0;
        border: 0;
        display: none;
        font-size: 1em;
        border-radius: 20px;
        padding: 0 20px;
    }

    .fa {
        box-sizing: border-box;
        padding: 10px;
        width: 42.5px;
        height: 42.5px;
        position: absolute;
        top: 3.5px;
        right: 2px;
        border-radius: 50%;
        color: #07051a;
        text-align: center;
        font-size: 1.2em;
        transition: all 1s;
    }

    form:hover, 
    form:valid{
        width: 200px;
        cursor: pointer;
    }

    form:hover input,
    form:valid input {
        display: block;
    }

    form:hover .fa,
    form:valid .fa {
        background-color: #07051a;
        color: white;
    }
</style>