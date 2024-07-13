<template>
    <HeaderComponent/>
    <SearchBarComponent @updateResults="updateResults"/>
    <!-- this is the home button -->
    <div class="container-fluid ms-5 mt-3">
        <div class="pb-3 ms-5">
            <RouterLink :to="{ name: 'home' }">
                <button class="btn draw-border"><i class="fa-solid fa-chevron-left"></i> Go Back</button>
            </RouterLink>
        </div>
        <!-- apartments results -->
    </div>
    <div class="container-fluid p-5">
        <h2 class="mt-5 ms-5 text-decoration-underline">Your Results</h2>
        <div class="d-flex gap-3 mb-3">
            <div id="services">
                <h2 class="text-center">Services</h2>
                <div class="d-flex" v-for="service in store.services" :key="service.id">
                    <input id="servcheck" type="checkbox" class="form-check-input me-2" :value="service.id" v-model="store.selectedServices">
                    <label for="servcheck">{{ service.name }}</label>
                </div>
            </div>
            <div id="filter">
                <div class="my-2">
                    <label for="Bedrooms">Bedrooms</label>
                    <input id="Bedrooms" type="number" class="form-control" placeholder="Bedrooms" v-model="store.beds">
                </div>
                <div>
                    <label for="rooms">Rooms</label>
                    <input id="rooms" type="number" class="form-control" placeholder="Rooms" v-model="store.rooms">
                </div>
                <div class="filter-distance">
                    <label for="distance-range">Distanza (km):</label>
                    <span id="distance-value">{{ store.radius }}</span>
                    <br>
                    <input class="w-75" type="range" id="distance-range" min="1" max="25" v-model="store.radius" @blur="fetchFilteredResults">
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-start flex-wrap ls-glass p-5">
            <div class="p-3" v-for="apartment in pippo" :key="apartment.slug">
                <CardComponent :item="apartment"/> 
            </div>
        </div>
    </div>
</template>

<script>
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
            pippo: [],
        }
    },
    methods: {
        getPippo() {
            this.pippo = store.pippo;
            console.log('pippo in result:', this.pippo);
        },
        async fetchFilteredResults() {
            console.log('fetchFilteredResults - params:', {
                beds: this.store.beds,
                rooms: this.store.rooms,
                services: this.store.selectedServices,
                radius: this.store.radius,
            }); // Log dei parametri
            
            const results = await store.methods.fetchApartmentsFiltered();
            console.log('fetchFilteredResults - results:', results); // Log dei risultati
            this.pippo = results;
        },
        updateResults(newResults) {
            this.pippo = newResults;
        }
    },
    mounted() {
        this.getPippo();
    },
    watch: {
        'store.beds': 'fetchFilteredResults',
        'store.rooms': 'fetchFilteredResults',
        'store.selectedServices': 'fetchFilteredResults',
    }
}
</script>

<style lang="scss" scoped>
.ls-btn-left,
.ls-btn-right {
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

.draw-border::before,
.draw-border::after {
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

.draw-border:hover::before,
.draw-border:hover::after {
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