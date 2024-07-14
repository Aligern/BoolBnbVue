<template>
    <header>
        <nav class="d-flex justify-content-between align-items-center mb-2">
            <!-- logo -->
                <div class="logo-container d-flex align-items-center"> 
                    <img class="position-relative" src="../assets/img/logo-1.png" alt="logo">
                    <span class="logo-span">Bool n Dreams</span>
                </div> 
                 <!-- ******************************* buttons register and login ********************************-->
                 <div class="text-center">
                    <a class="btn btn-outline-dark" href="http://127.0.0.1:8000/register"> 
                        <i class="fa-regular fa-id-card"></i> Register 
                    </a> 
                    or 
                    <a class="btn btn-outline-dark" href="http://127.0.0.1:8000/login">
                        <i class="fa-solid fa-unlock-keyhole"></i> Login
                    </a>
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
    padding: 0 10px 0 10px;
    background-color: hsla(0, 0%, 100%, 0.2);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid white;
    height: 100px;
    .title {
        padding-right: 70px;
        h1 {
            font-weight: 200;
            font-size: 3rem;
        }
        
    }
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
    width: 100px;
    height: 100px;
}
.logo-container {
        position: relative;
        width: fit-content;
    }
    
    .text-overlay {
        position: absolute;
        top: 55%;
        left: 63%;
        transform: translate(-50%, -50%);
        font-size: 3rem; 
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    header img {
    width: 150px;
}
.logo-span {
    position: absolute;
    left: 110px;
    font-size: 1.5rem;
    font-weight: 400;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
