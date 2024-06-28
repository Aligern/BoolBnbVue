<template>
    <header class="container ls-glass">
        <nav class="d-flex justify-content-between align-items-center p-">

                <div class="logo">
                    <img src="/src/assets/img/Immagine_2024-06-26_160710-removebg-preview.png" alt="">
                </div>

            <div class="text-center text-light">
                <h1>Bool <br> 'n' <br> Bubbles</h1>
            </div>

            <div class="text-center">
                <p class="p-1">
                    <a class="btn" href="#"> <i class="fs-4 fa-regular fa-id-card"></i>Register </a> <br> or <br> <a class="btn" href="#"><i class="fs-4 fa-solid fa-unlock-keyhole"></i> Login</a>
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
    margin-top: 10px;
    min-height: 100px;
    
}
nav {
    min-height: 90px;
}


p, a {
    color: #29C1E6;
    text-decoration: none;
}

</style>