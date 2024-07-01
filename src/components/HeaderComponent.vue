<template>
    <header class="container ls-glass">
        <nav class="d-flex justify-content-between align-items-center p-">
            <div class="p-2 position-relative">
                <div class="logo-container">
                    <p><i class="fs-2 fa-solid fa-house-flood-water"></i></p>
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
        margin-top: 10px;
        min-height: 100px;
    }

    nav {
        min-height: 90px;
        padding: 10px;
    }

    .ls-glass {
        background-color: hsla(0, 0%, 100%, 0.2);
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
        
        transform: translateX(-50%);
        width: 50%;

        transition: width 1.2s ease;
        //box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
   
        border-radius: 25px;
        
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
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    
    i {
        background: linear-gradient(#fbdb4f,#FA8A42 );
        -webkit-background-clip: text;
        color: transparent;
    }
}

.bubbles {
    position:relative;
    border-radius:100%;
    width: 60px;
    aspect-ratio: 1;
    background: linear-gradient(#29C1E6, #109FBF);

    animation: bubbles-rotation 5s linear infinite;
   
    
    div,div::before,div::after{
        position: absolute;
        width: 10px;
        left: -5px;
        aspect-ratio: 1;
        border-radius: 100%;
        background-color: #29C1E6;
    }

    div::before {
        content: '';
        display: block;
        width: 16px;
        left: -18px;
        top: 20px;
        background-color: #0d839e;
    }

    div::after {
        content: '';
        display: block;
        width: 6px;
        left: 25px;
        top: -9px;
        background-color: #0d839e;
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
