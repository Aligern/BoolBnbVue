<template>
    <header class="ls-header-glass">
        <nav class="d-flex justify-content-between align-items-center ">
            <div class="ms-3 p-2 position-relative">
                <div class="logo-container">
                    <p><i class="fs-5 fa-solid fa-house-flood-water"></i></p>
                </div>
                <div class="bubbles">
                    <div></div>
                </div>
            </div>

            <div class="text-center">
                <h1>
                    Bool
                    'n'
                    Bubbles
                </h1>
                <br />
            </div>

            <div class="text-center">
                <p class="">
                    <a class="btn draw-border" href="#"> <i class="fa-regular fa-id-card"></i>Register </a> <br> or <br> <a
                        class="btn draw-border" href="#"><i class="fa-solid fa-unlock-keyhole"></i> Login</a>
                </p>
            </div>
        </nav>
        <br />
    </header>
    <div class="ls-line"></div>

  
    
    <!-- <RouterLink :to="{ name: 'filters' }"><button class="btn draw-border">Advanced</button></RouterLink> -->
    
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
    header {
        min-height: 180px;
    }

    nav {
        min-height: 90px;
        padding: 10px;
    }

    .ls-header-glass {
        background-color: hsla(0, 0%, 100%, 0.2);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    }

    p,
    a {
        color: #29C1E6;
        text-decoration: none;
    }

    

    select {
        border-radius: 25px;
        height: 50px;
    }

    .logo-container {
        position: absolute;
        top: 62%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;

        i {
            background: linear-gradient(#fbdb4f, #FA8A42);
            -webkit-background-clip: text;
            color: transparent;
        }
    }

    .bubbles {
        position: relative;
        border-radius: 100%;
        width: 40px;
        aspect-ratio: 1;
        background: linear-gradient(#29C1E6, #109FBF);

        animation: bubbles-rotation 25s linear infinite;


        div,
        div::before,
        div::after {
            position: absolute;
            width: 9px;
            left: -5px;
            aspect-ratio: 1;
            border-radius: 100%;
            background-color: #29C1E6;
        }

        div::before {
            content: '';
            display: block;
            width: 16px;
            left: -12px;
            top: 20px;
            background-color: #0d839e;
        }

        div::after {
            content: '';
            display: block;
            width: 6px;
            left: 22px;
            top: -7px;
            background-color: #0d839e;
        }

        @keyframes bubbles-rotation {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(-360deg);
            }
        }
    }

    .draw-border {
        box-shadow: inset 0 0 0 4px #29C1E6;
        color: #29C1E6;
        transition: color 0.25s 0.0833333333s;
        position: relative;
       }
       
       .draw-border::before, .draw-border::after {
        border: 0 solid transparent;
        box-sizing: border-box;
        content: "";
        pointer-events: none;
        position: absolute;
        width: 0;
        height: 0;
        bottom: 0;
        right: 0;
       }
       
       .draw-border::before {
        border-bottom-width: 4px;
        border-left-width: 4px;
       }
       
       .draw-border::after {
        border-top-width: 4px;
        border-right-width: 4px;
       }
       
       .draw-border:hover {
        color: #fbbf4f;
       }
       
       .draw-border:hover::before, .draw-border:hover::after {
        border-color: #fbbf4f;
        transition: border-color 0s, width 0.25s, height 0.25s;
        width: 100%;
        height: 100%;
       }
       
       .draw-border:hover::before {
        transition-delay: 0s, 0s, 0.25s;
       }
       
       .draw-border:hover::after {
        transition-delay: 0s, 0.25s, 0s;
       }
       
       .btn {
        background: none;
        border: none;
        cursor: pointer;
        line-height: 1.5;
        font: 700 14px "Roboto Slab", sans-serif;
        padding: 1em 2em;
        letter-spacing: 0.05rem;
       }
       
       .btn:focus {
        outline: 2px dotted #29C1E6;
       }
       
       






</style>
