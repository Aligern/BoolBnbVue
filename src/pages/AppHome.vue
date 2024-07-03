<template>
    <JumbotronComponent />
    <div class="ls-glass container d-flex overflow-y-hidden mt-3">
        <CardComponent v-for="apartment in apartments" :key="apartment.id" :item="apartment" />
    </div>
</template>

<script>
    import CardComponent from '@/components/CardComponent.vue';
    import JumbotronComponent from '@/components/JumbotronComponent.vue';
    import { store } from '../store';
    import axios from 'axios';
    export default {
        name: 'AppHome',
        components: {
            CardComponent,
            JumbotronComponent,
        },
        data() {
            return {
                apartments: [],
               
            }
        },
        methods: {
            getAllApartments() {
                axios.get(store.apiBaseUrl + '/apartments').then((res) => {
                    console.log('Response data:', res.data);
                    this.apartments = res.data.results;
                    // console.log(this.apartments);
                }).catch(error => {
                    console.error('An error has occurred:', error);
                    console.log('Response data:', error.response.data);
                });
            },

        },
        mounted() {
            this.getAllApartments();

        }
    }
</script>


<style lang="scss" scoped></style>



<!-- , { params: this.params } -->