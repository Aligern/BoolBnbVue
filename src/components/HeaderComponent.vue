<template>
    <header class="container ls-glass">
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
    z-index: 9999;
    top: 0;
    right: 15%;
    position: fixed;
    margin-top: 10px;
    min-height: 100px;
    
}
nav {
    min-height: 90px;
}

.ls-glass {
  background-color: hsla(0, 0%, 100%, 0.2);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  box-shadow:5px 5px 5px rgba(0, 0, 0, 0.2);
}


</style>