<template>
    <header class="container">
        <nav class="d-flex justify-content-between align-items-center">
            <div  class="logo">
                <img src="/src/assets/img/Immagine_2024-06-26_160710-removebg-preview.png" alt="">
            </div>    
            <div >menu</div>
        </nav>
        <br>
        <div class="ls-line"></div>
    </header>
    <div>
        <form id="search-form" action="">
            <input type="search" required>
            <i class="fa fa-search"></i>
        </form>
    </div>

</template>

<script>
    export default {
        name: 'HeaderComponent',
    }
</script>

<style lang="scss" scoped>

header {
    height: 90px;
}

form {
    transform: translate(-50%, -50%);
    transition: all 1s;
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 25px;
    padding: 5px;
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
        top: 0;
        right: 0;
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