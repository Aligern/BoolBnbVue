<template>
    <HeaderComponent/>
    <SearchBarComponent @getPippo="getPippo"/>
        <!-- this is the home button -->
    <div class="pb-3">
        <RouterLink :to="{ name: 'home' }">
            <button class="btn draw-border"><i class="fa-solid fa-chevron-left"></i> Go Back</button>
        </RouterLink>
    </div>

    <div class="container justify-content-between mb-5">
        <h2 class="">Your Results</h2>
        <div class="d-flex flex-wrap">
            <CardComponent class="" v-for="apartment in pippo" :key="apartment.result.id" :item="apartment.result" />
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
                    pippo: [],
                }
            },
            methods: {
                scroll(distance, id) {
                    //console.log('entrato'),
                    //console.log(distance),
                    //console.log(id),
                    console.log(this.apartments,'ciaooo'),
                    this.$refs[id].scrollBy({
                        left: distance,
                        behavior: 'smooth',
                    })
                },
                getPippo(){
                    this.pippo = [];
                    this.pippo = store.pippo;
                }
            },
        mounted() {
            this.getPippo()
        },
        
        // mounted() {
        //     //store.methods.getAllApartments();
        //     this.checkResults;
        // },
        // computed: {
        //     checkResults() {
        //         console.log('ciao:', );
        //         if (store.pippo.results != null) {
        //             console.log('ciao', this.apartments);
        //             return this.apartments = store.pippo.results;
        //         } else {
        //             return false
        //         }
        //     }
        // }
    }
</script>

<style lang="scss" scoped>


.ls-btn-left, .ls-btn-right {
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    border-radius: 5px;
    color: white;
    padding: 30px 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-250%);

}

.ls-btn-left {
    left: 10px;
}

.ls-btn-right {
    right: 10px;
}

#CardScrollContainer {
    display: flex;
    align-items: center;
    overflow-x: scroll;
}

.d-flex.justify-content-between.position-relative {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 20px;
}

</style>