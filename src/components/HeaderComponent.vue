<template>
    <header class="">
        <nav class="d-flex justify-content-between align-items-center p-">
            <div class="ms-3 p-2 position-relative">
                <div class="logo-container">
                    <i class="fs-2 fa-solid fa-home"></i><br>
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
                <p class="p-1">
                    <a class="btn" href="#"> <i class="fs-4 fa-regular fa-id-card"></i>Register </a> <br> or <br> <a
                        class="btn" href="#"><i class="fs-4 fa-solid fa-unlock-keyhole"></i> Login</a>
                </p>
            </div>
        </nav>
        <br />
        <div class="ls-line"></div>
    </header>

    <div id="search-bar" class="absolute">
        <div class="d-flex gap-2">
            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

        </div>


    </div>

   
</template>

<script>
    export default {
        name: "HeaderComponent",
        data() {
            return {};
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                const scrollPosition = window.pageYOffset;
                const searchBar = document.querySelector('#search-bar'); // Seleziona la barra di ricerca
                const nav = document.querySelector('nav'); // Seleziona la barra di ricerca
                const title = document.querySelector('h1');


                if (scrollPosition > 147) {

                    searchBar.style.width = '20%';
                    searchBar.className = 'fixed';
                   
                } else {
                    searchBar.style.width = '50%';
                    searchBar.className = 'absolute';

                }

            }
        }
    };
</script>

<style lang="scss" scoped>
    header {
        
        min-height: 100px;
        background-color: hsla(0, 0%, 80%, 0.3);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    }

    nav {
        min-height: 90px;
        padding: 10px;
        h1 {
            padding: 5px;
            border: 5px solid #29C1E6;
            border-radius: 20px;
        font-size: 47px;
        font-weight: 500;
        font-family: fantasy;
        background-image: linear-gradient(45deg, #29C1E6, #109FBF);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
    }
        
    }

    .ls-glass {
        background-color: hsla(0, 0%, 80%, 0.3);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        border-radius: 15px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    }

    p,
    a {
        color: #29C1E6;
        text-decoration: none;
    }

    #search-bar {
        height: 50px;
        
        transform: translateX(-50%) translateY(10%);
    
        width: 50%;

        transition: width 1.3s ease;
        //box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
   
        border-radius: 25px;
        
        select {
            border: 1px solid #29C1E6;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
        }
    }

    .absolute {
        position: absolute;
        top: 150px;
        left: 50%;
    }

    .fixed {
        position: fixed;
        top: 3px;
        left: 50%;
        z-index: 2000;
    }


    select {
        border-radius: 25px;
        height: 50px;
    }

    .logo-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    
    img {
        width: 50px;
    }
}

.bubbles {
    position:relative;
    border-radius:100%;
    width: 70px;
    aspect-ratio: 1;
    background: linear-gradient(#29C1E6, #109FBF);
    animation: bubbles-rotation 30s linear infinite;
   
    div,div::before,div::after{
        position: absolute;
        width: 13px;
        left: -5px;
        aspect-ratio: 1;
        border-radius: 100%;
        background: linear-gradient(#29C1E6, #109FBF);
    }

    div::before {
        content: '';
        display: block;
        width: 18px;
        left: -15px;
        top: 20px;
        background: linear-gradient(#29C1E6, #109FBF);
    }

    div::after {
        content: '';
        display: block;
        width: 8px;
        left: 20px;
        top: -9px;
        background: linear-gradient(#29C1E6, #109FBF);
    }
    @keyframes bubbles-rotation  {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }
}



</style>
