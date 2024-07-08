<template>
    <HeaderComponent/>
    <SearchBarComponent @getPippo="getPippo"/>
        <!-- this is the home button -->
         <div class="container mt-4">
             <div class="pb-3">
                 <RouterLink :to="{ name: 'home' }">
                     <button class="btn draw-border"><i class="fa-solid fa-chevron-left"></i> Go Back</button>
                 </RouterLink>
             </div>
         
             <div class="container justify-content-between mb-5">
                 <h2 class="">Your Results</h2>
                 <div class="d-flex flex-wrap">
                     <CardComponent class="" v-for="apartment in pippo" :key="apartment.result.slug" :item="apartment.result" />
                 </div>
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

.draw-border {
 //box-shadow: inset 0 0 0 4px #000000;
 color: #000000;
 transition: color 0.25s 0.0833333333s;
 position: relative;
}

.draw-border::before, .draw-border::after {
 border: 0 solid transparent;
 box-sizing: border-box;
 border-radius: 3px;
 content: "";
 pointer-events: none;
 position: absolute;
 width: 0;
 height: 0;
 bottom: 0;
 right: 0;
}

.draw-border::before {
 border-bottom-width: 4px;
 border-left-width: 4px;
}

.draw-border::after {
 border-top-width: 4px;
 border-right-width: 4px;
}

.draw-border:hover {
 color: #000000;
 background-color: transparent;
}

.draw-border:hover::before, .draw-border:hover::after {
 border-color: #000000;
 transition: border-color 0s, width 0.25s, height 0.25s;
 width: 100%;
 height: 100%;
}

.draw-border:hover::before {
 transition-delay: 0s, 0s, 0.25s;
}

.draw-border:hover::after {
 transition-delay: 0s, 0.25s, 0s;
}

.btn {
 background: none;
 border: none;
 cursor: pointer;
 line-height: 1.5;
 font: 700 17px "Roboto Slab", sans-serif;
 padding: 1em 2em;
 letter-spacing: 0.05rem;
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