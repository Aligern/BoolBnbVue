<template>
  <HeaderComponent />
  <main>
    <h1>ciao</h1>
  </main>
  <FooterComponent />
  
</template>

<script>
import axios from 'axios';
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
  export default {
    name: 'App',
    components: { 
      HeaderComponent,
      FooterComponent,
      },
      data() {
        return {
          store
        }
      },
      methods:{
      
      }
  }
</script>

<style lang="sass" scoped>

</style>