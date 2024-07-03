<template>
<div id="jumbotron">
    <HeaderComponent /> 
    <h2 class="p-2 text-light">Titolo1</h2>
    <h2 class="p-2 text-light d-flex justify-content-end">Titolo2</h2>
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
        }
    }
</script>

<style lang="scss" scoped>
#jumbotron {    
    height: 700px;
    width: 100%;
    background-image: url('../assets/img/cover-12.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>