<template>
  <div id="jumbotron">
    <HeaderComponent />
    <h2 class="p-2 text-light">Titolo1</h2>
    <h2 class="p-2 text-light d-flex justify-content-end">Titolo2</h2>
    </div>

  <div id="modal" class="absolute" >
    <ModalSearchComponent />
    
  </div>
  <main>


    <router-view></router-view>
    

    <div class="ls-line"></div>
    
  </main>
  <FooterComponent />
</template>

<script>

  import axios from 'axios';
  import { store } from './store';
  import HeaderComponent from './components/HeaderComponent.vue';
  import CardComponent from './components/CardComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
  import ModalSearchComponent from './components/ModalSearchComponent.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      FooterComponent,
      CardComponent,
      ModalSearchComponent,
    },
    data() {
      return {
        store
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const scrollPosition = window.pageYOffset;
        const modale = document.querySelector('#modal'); // Seleziona la barra di ricerca



        if (scrollPosition > 156) {

          modale.className = 'fixed';

        } else {
          modale.className = 'absolute';

        }

      }
    }
  }
</script>

<style lang="scss" scoped>

  main {
    margin-top: 50px;
  }

  #jumbotron {    
    height: 700px;
    width: 100%;
    background-image: url('./assets/img/cover-12.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

  .absolute {
    position: absolute;
    top: 200px;

  }

  .fixed {
    position: fixed;
    top: 49px;
 
    z-index: 2000;
  }




</style>