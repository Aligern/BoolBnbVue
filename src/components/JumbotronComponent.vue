<template>
<div id="jumbotron">
    <HeaderComponent />
    <div class=" mr-container">
        <div id="jumbo-title-1" class="text-white">Choose your home...</div>
    </div>
    <div class="mr-container">
        <div id="jumbo-title-2" class="text-white text-end ">...Choose your dream</div>
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
    height: 70vh;
    width: 100%;
    background-image: url('../assets/img/prova_jumbotron_2.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    .mr-container{
        width: 900px;
        margin: 0 auto;
        #jumbo-title-1 {
            position: absolute;
            top: 55%;
            left: 20%;
            font-size: 5rem;
            font-weight: 100;
            font-style: italic;
        }
        #jumbo-title-2 {
            position: absolute;
            top: 75%;
            right: 20%;
            font-size: 5rem;
            font-weight: 100;
            font-style: italic;
        }
    }

    // #jumbo-title-2 {
    //     transform: translate(0, 200px);
    // }
    
}
</style>