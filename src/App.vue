<template>
  <HeaderComponent />

  <div id="modal" class="absolute" >
    <ModalSearchComponent />

  </div>
  <main class="container ls-glass mb-2">


    <div id="content">
      <h1 class="text-center">ciao</h1>
      <p class="text-center">Io sono il main</p>
      <CardComponent />
    </div>
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