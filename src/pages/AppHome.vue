<template>
    <div class="mb-3 container ls-glass">
        <CardComponent />
    </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
import { store } from '../store';
import axios from 'axios';
    export default {
        name: 'AppHome',
        components: {
            CardComponent,

        },
        data() {
            return {
                apartments: [],
                services: [],
            }
        },
        methods: {
            getAllApartments() {
                axios.get(store.apiBaseUrl + '/apartments').then((res) => {
                    console.log('Response data:', res.data);
                    this.apartments =  res.data.results;
                    // console.log(this.apartments);
                }).catch(error => {
                    console.error('An error has occurred:', error);
                    console.log('Response data:', error.response.data);
                });
            },
            getAllServices() {
                axios.get(store.apiBaseUrl + '/services').then((res) => {
                    console.log('Response data:', res.data);
                    this.services =  res.data.results;
                    // console.log(this.apartments);
                }).catch(error => {
                    console.error('An error has occurred:', error);
                    console.log('Response data:', error.response.data);
                });
            },
        },
        mounted() {
            this.getAllApartments();
            this. getAllServices();
        }
        


    }
   
</script>


<style lang="scss" scoped>



</style>



<!-- , { params: this.params } -->