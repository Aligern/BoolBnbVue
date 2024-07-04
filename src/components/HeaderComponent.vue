<template>
    <header>
        <nav class="d-flex justify-content-between align-items-center mb-2">
            <!-- logo -->
                <div class="logo-container"> 
                    <img class="img-fluid h-100 w-50" src="../assets/img/B-removebg-preview.png" alt="">
                </div>

                    <!-- title center -->
                <div class="text-center">
                    <h1 class="pb-2">
                        Dreamhouse
                    </h1>
                </div>

               
        </nav>
    </header>
</template>

<script>
    import ModalSearchComponent from './CanvasComponent.vue';
    import { store } from '../store';
    export default {
        name: "HeaderComponent",
        data() {
            return {
                store,
            };
        },
    };
</script>

<style lang="scss" scoped>
nav {
    padding: 10px;
    background-color: hsla(0, 0%, 100%, 0.2);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid white;
    height: 150px;
}

p,
a {
    color: white;
    text-decoration: none;
}

select {
    border-radius: 25px;
    height: 50px;
}

.btn {
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    border-radius: 5px;
    color: white;
    padding: 12px 12px;
}

header img {
    width: 120px;
    height: 120px;
}
</style>
