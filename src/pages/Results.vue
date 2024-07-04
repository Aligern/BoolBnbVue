<template>
    <HeaderComponent/>
    <SearchBarComponent/>
    <div class="container m-0-auto mt-3">
        <div class="pb-3">
                    <RouterLink :to="{ name: 'home' }">
                        <button class="btn draw-border"><i class="fa-solid fa-chevron-left"></i> Go Back</button>
                    </RouterLink>
            </div>

            <div id="results-container">
                <h1>Results</h1>
                <div ref="CardScrollContainer" class="ls-glass container d-flex overflow-x-scroll mt-3">
                    <CardComponent v-for="apartment in apartments" :key="apartment.id" :item="apartment"/>
                </div>
            </div>
            <div class="d-flex justify-content-between">
    <!-- scroll left btn -->
    <button class="ls-btn-left" id="scrollLeftCard" @click="scroll(-600, 'CardScrollContainer')">
        <i class="fa-solid fa-chevron-left"></i>
    </button>
    <!-- scroll right btn -->
    <button class="ls-btn-right" id="scrollRightCard" @click="scroll(600, 'CardScrollContainer')">
        <i class="fa-solid fa-chevron-right"></i>
    </button>
</div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import HeaderComponent from '../components/HeaderComponent.vue';
import SearchBarComponent from '@/components/SearchBarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import CardComponent from '../components/CardComponent.vue';
    export default {
        name: 'Results',
        components: { 
            HeaderComponent,
            FooterComponent,
            CardComponent,
            SearchBarComponent
            },
            data() {
                return {
                    store,
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

            scroll(distance, id) {
            //console.log('entrato'),
            //console.log(distance),
            //console.log(id),
            this.$refs[id].scrollBy({
                left: distance,
                behavior: 'smooth',
            })
        }

        },
        mounted() {
            this.getAllApartments();
        }
    }
</script>

<style lang="scss" scoped>
.ls-btn-left {
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    border-radius: 5px;
    color: white;
    padding: 30px 10px;
    transform: translate(1px, -330px);
}

.ls-btn-right {
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    border-radius: 5px;
    color: white;
    padding: 30px 10px;
    transform: translate(-1px, -330px);
}

</style>