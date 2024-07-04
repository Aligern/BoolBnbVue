<template>
<div id="jumbotron">
    <HeaderComponent />
    <div class="p-2">
        <h1 id="jumbo-title-1" class="text-white">Your next dreamhouse</h1>
        <h2 id="jumbo-title-2" class="text-black text-end ">..where to dream</h2>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import HeaderComponent from './HeaderComponent.vue';
    export default {
        name: 'JumbotronComponent',
        data() {
            return {
                store
            }
        },
        components: {
            HeaderComponent
        },
        methods: {
           
}}
</script>

<style lang="scss" scoped>



#jumbotron {    
    height: 100vh;
    width: 100%;
    background-image: url('../assets/img/2.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    #jumbo-title-2 {
        transform: translate(0, 200px);
    }
}
</style>