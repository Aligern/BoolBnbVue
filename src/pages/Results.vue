<template>
    <HeaderComponent/>
    <SearchBarComponent/>
        <!-- this is the home button -->
    <div class="pb-3">
        <RouterLink :to="{ name: 'home' }">
            <button class="btn draw-border"><i class="fa-solid fa-chevron-left"></i> Go Back</button>
        </RouterLink>
    </div>

    <div id="promoted" class="p-3 container-fluid">
        <h2 class="ms-5">Your Results</h2>
        <div ref="CardScrollContainer" class="ls-glass mx-5 d-flex overflow-x-scroll">
            <CardComponent v-for="apartment in apartments" :key="apartment.id" :item="apartment" />
        </div>
<!-- these are the scroll buttons -->
        <div class="d-flex justify-content-between position-relative">
<!-- scroll left btn -->
            <button class="ls-btn-left" id="scrollLeftCard" @click="scroll(-440, 'CardScrollContainer')">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
<!-- scroll right btn -->
            <button class="ls-btn-right" id="scrollRightCard" @click="scroll(440, 'CardScrollContainer')">
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
            scroll(distance, id) {
            //console.log('entrato'),
            //console.log(distance),
            //console.log(id),
            console.log(this.apartments,'ciaooo'),
            this.$refs[id].scrollBy({
                left: distance,
                behavior: 'smooth',
            })
        }
        },
        mounted() {
            //store.methods.getAllApartments();
            this.checkResults;
        },
        computed: {
            checkResults() {
                console.log('ciao');
                if (store.pippo.results != null) {
                    console.log('ciao', this.apartments);
                    return this.apartments = store.pippo.results;
                } else {
                    return false
                }
            }
        }
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