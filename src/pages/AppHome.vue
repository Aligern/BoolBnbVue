<template>
    <JumbotronComponent />
    <div>
        <!-- these are the promoted cards -->
        <div ref="CardScrollContainer" class="ls-glass container d-flex overflow-x-scroll mt-3">
            <CardComponent v-for="apartment in apartments" :key="apartment.id" :item="apartment"/>
        </div>
    </div>
    <!-- these are the scroll buttons -->
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
    transform: translate(245px, -330px);
}

.ls-btn-right {
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    border-radius: 5px;
    color: white;
    padding: 30px 10px;
    transform: translate(-245px, -330px);
}

#CardScrollContainer {
    overflow-x: scroll;
}
</style>




