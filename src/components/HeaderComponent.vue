<template>
    <header class="container ls-glass">
        <nav class="d-flex justify-content-between align-items-center p-">
            <div class="logo">
                
            </div>

            <div class="text-center">
                <h1>
                    Bool <br />
                    'n' <br />
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

    <div id="search-bar">
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

    <div></div>
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
                   
                    nav.style.height = '70px';


                } else {
                    searchBar.style.width = '50%';
                    searchBar.className = 'absolute';

                    nav.style.height = '100px';


                }

            }
        }
    };
</script>

<style lang="scss" scoped>
    header {
        //position: fixed;
        //z-index: 2000;
        //margin-left: 300px;
        margin-top: 50px;
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
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    }

    p,
    a {
        color: #29C1E6;
        text-decoration: none;
    }

    #search-bar {
        height: 50px;
        transform: translateY(-50%);
        transform: translateX(-50%);
        width: 300px;
        transition: width 1.2s ease;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
        background-color: white;
        border-radius: 25px;
        z-index: 3000;
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
    }


    select {
        border-radius: 25px;
        height: 50px;
    }



</style>
