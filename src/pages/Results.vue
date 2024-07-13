<template>


    <HeaderComponent />
    <div id="filter" class="container d-flex flex-column align-items-center">
        <div id="services-container">
            <!-- services section -->
            <div id="services">
                <button v-for="service in store.services" :key="service.id" class="btn "
                    :class="{ active: isSelected(service.id) }" @click="toggleSelection(service.id)" styl>
                    <img class=" service-img" :src="store.imgBasePath + service.icon" alt="">
                </button>
            </div>

        </div>

        <div class="d-flex align-items-center justify-content-around container">

            <div id="iduecounter" class="d-flex ">
                <!-- primo counter for beds -->
                <div class="mx-4">
                    <h3 class="text-center my-4">Beds</h3>

                    <div class="d-flex" id="beds">
                        <div class="d-flex align-items-center">
                            <button class="btn-counter  " type="button" @click="decrement('beds')"
                                :disabled="beds <= 0 ? true : false">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <span class="square"> {{ beds }}</span>
                            <button class="btn-counter " type="button" @click="increment('beds')"
                                :disabled="beds >= 10 ? true : false">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- second counter for bedrooms -->
                <div class="mx-4">
                    <h3 class="text-center my-4">Bedrooms</h3>

                    <div class="d-flex mb-4" id="rooms">
                        <div class="d-flex align-items-center">
                            <button class="btn-counter " type="button" @click="decrement('rooms')"
                                :disabled="rooms <= 0 ? true : false">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <span class="square"> {{ rooms }}</span>
                            <button class="btn-counter  " type="button" @click="increment('rooms')"
                                :disabled="rooms >= 10 ? true : false">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ********************* range bar for distance **************** -->

            <div class="filter-distance"><label for="distance-range">Distanza (km):</label> <span id="distance-value">{{
                store.radius }}</span> <br><input class="form-range" type="range" id="distance-range" min="1"
                    max="25" value="20" v-model="store.radius">
            </div>
        </div>
    </div>
    <!--  ******************* map section ******************** -->
    <div id="map-container">
        <div class="map " aria-label="map">
            <Map />
        </div>
    </div>




    <SearchBarComponent @updateResults="updateResults" />
    <!-- this is the home button -->
    <!-- <div class="container-fluid ms-5 mt-3">
        <div class="pb-3 ms-5">

            <button  class="btn draw-border"><i
                    class="fa-solid fa-chevron-left"></i> Go Back</button>

        </div> 
    </div> -->

    <!-- ********************* apartments results ********************************** -->
    <div class="container-fluid p-5">
        <h2 class="mt-5 ms-5 text-decoration-underline">Your Results</h2>
        <div class="d-flex justify-content-start flex-wrap ls-glass p-5">
            <div class="p-3" v-for="apartment in pippo" :key="apartment.slug">
                <CardComponent :item="apartment" />
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
    import Map from '../components/Map.vue';


    export default {

        name: 'Results',
        components: {
            HeaderComponent,
            FooterComponent,
            CardComponent,
            SearchBarComponent,
            Map

        },
        data() {
            return {
                store,
                pippo: [],
                beds: 0,
                rooms: 0,

            }
        },
        methods: {
                        //funzione per l'update dei risultati
            // Toggle selection of a service
            toggleSelection(serviceId) {
                const index = this.store.selectedServices.indexOf(serviceId);
                if (index === -1) {
                    this.store.selectedServices.push(serviceId);
                    //console.log(this.store.selectedServices);
                } else {
                    this.store.selectedServices.splice(index, 1);
                    //console.log(this.store.searchService);
                }
            },
            // Check if a service is selected
            isSelected(serviceId) {
                return this.store.selectedServices.includes(serviceId);
            },



            //funzioni per i counter

            increment(variable) {
                if (this[variable] < 10) {
                    this[variable] += 1;
                    this.store[variable] = this[variable];
                    //console.log(this.store[variable])
                }
            },
            decrement(variable) {
                if (this[variable] > 0) {
                    this[variable] -= 1;
                    this.store[variable] = this[variable];
                    //console.log(this.store[variable])
                }
            },

            //funxione per il range di distanza
            rangeFunction() {
                const distanceRange = document.getElementById('distance-range');
                const distanceValue = document.getElementById('distance-value');

                distanceRange.addEventListener('input', function () {
                    const selectedDistance = store.radius;
                    distanceValue.textContent = selectedDistance + ' km';
                });
            },


            scroll(distance, id) {
                //console.log('entrato'),
                //console.log(distance),
                //console.log(id),
                console.log(this.apartments, 'ciaooo'),
                    this.$refs[id].scrollBy({
                        left: distance,
                        behavior: 'smooth',
                    })
            },


// Matteo Functions
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
            mounted() {
                this.getPippo();
                this.fetchResults();
                document.addEventListener('click', this.handleClickOutside);// jasvascript per il collapse
                this.rangeFunction();//funzione per il range
                console.log(store.pippo)

            },
            beforeUnmount() {//javascript per il collapse
                document.removeEventListener('click', this.handleClickOutside);
            },
            watch: {
                '$route.query.address': 'fetchResults'
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

    #filter {
        #services-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            #services {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }
        }


    }

    #map-container {
        display: flex;
        justify-content: center;





    }

    button {
        cursor: pointer;
    }

    .square {

        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        margin: 5px;
        padding: 10px;
        font-size: 2rem;
    }

    .service-img {
        width: 35px;
    }

    .btn-counter {
        width: 60px;
        aspect-ratio: 1 / 1;
    }

    .btn {

        width: 70px;
        margin: 10px;

    }

    .btn,
    .btn-counter {
        aspect-ratio: 1 / 1;
        box-shadow: 4px 4px 9px rgba(57, 57, 57, 0.4235294118),
            0px 0px 0px rgba(36, 36, 36, 0.1607843137),
            inset -4px -4px 4px rgba(68, 68, 68, 0.7019607843),
            inset 0px 0px 0px rgba(52, 52, 52, 0.062745098);
        border: none;
        color: rgb(161, 161, 161);
        transition: 500ms;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
    }

    .filter-distance {
        width: 400px;
    }

    // Effetto attivo sui pulsanti

    .btn.active {
        background-color: rgba(226, 157, 169, 0.413);
    }

    .btn:active,
    .btn-counter:active {
        box-shadow: 0px 1px 0px rgba(35, 35, 35, 0.9215686275),
            0px 0px 2px rgba(42, 42, 42, 0.7098039216),
            inset 3px 3px 6px rgba(42, 42, 42, 0.9058823529);
        transition: box-shadow 80ms ease-in-out;
    }




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


    @media screen and (max-width: 576px) {}
</style>