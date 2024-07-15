<template>
    <header>
        <nav class="d-flex justify-content-between align-items-center mb-2">
            <!-- logo -->

            <div class="logo-container d-flex align-items-center">
                <img class="position-relative" src="../assets/img/logo-6.png" alt="logo">
                <span class="logo-span">Bool n Dreams</span>
            </div>
            <!-- ******************************* buttons register and login ********************************-->
            <div id="buttonsHeader" class="text-center d-flex">
                <a class="btn  " href="http://127.0.0.1:8000/register">
                    Register
                </a>
                <a class="btn ms-3" href="http://127.0.0.1:8000/login">
                    Login
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

    .btn {
        aspect-ratio: 1 / 1;
        box-shadow: 4px 4px 9px rgba(57, 57, 57, 0.4235294118),
            0px 0px 0px rgba(36, 36, 36, 0.1607843137),
            inset -4px -4px 4px rgba(68, 68, 68, 0.7019607843),
            inset 0px 0px 0px rgba(52, 52, 52, 0.062745098);
        border: none;
        color: rgb(0, 0, 0);
        transition: 500ms;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75px;
        height: 37px;
    }

    .btn:active {
        box-shadow: 0px 1px 0px rgba(35, 35, 35, 0.9215686275),
            0px 0px 2px rgba(42, 42, 42, 0.7098039216),
            inset 3px 3px 6px rgba(42, 42, 42, 0.9058823529);
        transition: box-shadow 70ms ease-in-out;
    }

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
    width: 200px;
}
.logo-span {
    position: absolute;
    left: 110px;
    font-size: 1.5rem;
    font-weight: 400;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
