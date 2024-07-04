<template>

<CanvasComponent/>
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
  import JumbotronComponent from './components/JumbotronComponent.vue';
import CanvasComponent from './components/CanvasComponent.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      FooterComponent,
      CardComponent,
      JumbotronComponent,
      CanvasComponent
    },
    data() {
      return {
        store,
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



  .absolute {
    position: absolute;
    top: 200px;

  }

  .fixed {
    position: fixed;
    top: 49px;
 
    z-index: 2000;
  }


  HeaderComponent {
    z-index: 1000;
  }

</style>