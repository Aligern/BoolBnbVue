<template>
<HeaderComponent />
  <main>
    <router-view></router-view>
  </main>
  <FooterComponent />
</template>

<script>
import axios from 'axios';
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import CardComponent from './components/CardComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
  export default {
    name: 'App',
    components: { 
      HeaderComponent,
      FooterComponent,
      CardComponent
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

<style lang="scss" scoped>

main{
   margin-top: 50px;
}


</style>