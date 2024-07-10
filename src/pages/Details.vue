<template>
    <HeaderComponent />
    <div class="container m-0-auto mt-3">
        <!-- button go back -->
        <div class="pb-3">
            <!-- this is the home button -->
            <RouterLink :to="{ name: 'home' }">
                <button class="btn draw-border"><i class="fa-solid fa-chevron-left"></i> Go Back</button>
            </RouterLink>
        </div>
        <div id="apartment-container">
            <!-- apartment image -->
            <h1>Welcome to {{ apartments?.name }}</h1>
            <div class="w-50 m-auto" id="apartment-image">
                <img class="img-fluid " :src="store.imgBasePath + apartments?.image_cover" :alt="apartments?.name">
            </div>
            <!-- left side -->
            <!-- apartment info -->
            <div class="d-flex justify-content-center ls-glass mt-4 ">
                <div id="host-info-left" class="">
                    <div class="text-center">
                        <div class="p-2 ls-line-bot text-center">
                            <h3 class="">{{ apartments?.name }}</h3>
                        </div>
                        <!-- services bagdes -->
                        <h5 class="pt-3 text-center">- Services available -</h5>
                          
                        <div  class="d-flex justify-content-center">
                             <span v-for="service in apartments.services" :key="service.id" class="btn">{{ service.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- right side -->
            <div id="apartment-info-right" class="ls-glass mt-4 mb-4 d-flex justify-content-between">
                <div id="apartment-reservation" class="ls-line-right d-flex flex-column justify-content-between">
                    <div>
                        <h4>Information</h4>
                        <ul class="p-2">
                            <li><i class="fa-solid fa-home"></i> Rooms: {{ apartments?.rooms }}</li>
                            <li><i class="fa-solid fa-bath"></i> Bathrooms: {{ apartments.bathrooms }}</li>
                            <li><i class="fa-solid fa-bed"></i> Beds: {{ apartments.beds }}</li>
                            <li><i class="fa-solid fa-ruler"></i> Square Meters: {{ apartments.square_meters }}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Address:</h4>
                        <p>{{ apartments.address }}</p>
                    </div>
                </div>
                <!-- apartment description -->
                <div id="apartment-description" class="">
                    <div>
                        <h3>Apartment Description</h3>
                        <p>{{ apartments.description }}</p>
                    </div>
                    <div class="d-flex justify-content-start">
                        <RouterLink :to="{ name: 'payments' }">
                            <button class="btn draw-border"><i class="fa-solid fa-credit-card"></i> Reserve now</button>
                        </RouterLink>
                    </div>
                </div>
            </div>
            <!-- contact host form -->
            <div class="container ls-glass mt-4 mb-4 d-flex justify-content-between">
        <div id="contact-form">
            <div class="p-3 pe-3">
                <form @submit.prevent="sendForm()" class="">
                    <h4>Contact me:</h4>
                    <div class="d-flex">
                        <div>
                            <label for="name">Name<span class="text-danger">*</span></label>
                            <input v-model="name" type="text" class="form-control" id="name" placeholder="Your name">
                        </div>
                        <div class="ms-3">
                            <label for="email">Email address <span class="text-danger">*</span></label>
                            <input v-model="email" type="email" class=" form-control" id="email" placeholder="name@example.com">
                        </div>
                    </div>
                    <div class="mt-2">
                        <label for="message">Your message</label>
                        <textarea v-model="message" class="form-control" id="message" cols="30" rows="10">{{ message }}</textarea>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" :disabled="!isValidEmail(email)"  class="btn draw-border mt-2"><i class="fa-solid fa-envelope-open-text"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
        </div>
    </div>
</template>

<script>
    import { store } from '../store';
    import axios from 'axios';
    import HeaderComponent from '../components/HeaderComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue';
    export default {
        name: 'Details',
        components: {
            HeaderComponent,
            FooterComponent,
        },
        data() {
            return {
                store,
                emailRegex: /^(?!.*\.\.)((?!\.)[\w-]+(\.[\w-]+)*)(@[\w-]+)((\.[a-zA-Z]{2,})+)$/,
                email: '',
                message: '',
                name: '',
                apartments: [],
            }
        },
        computed: {
            // questa funziona effettua un check sulla validazione del form tramite la proprietà trim() disabilitando il pulsante quando il campo email o il messaggio sono vuoti
        },
        methods: {
            getApartment() {
            axios.get(`${this.store.apiBaseUrl}/apartments/${this.$route.params.slug}`).then((res) => {
                console.log('Response data:', res.data);
                this.apartments = res.data.results;
                
                console.log('provadetails:', this.apartments);
                
            }).catch(error => {
                console.error('An error has occurred:', error);
                console.log('Response data:', error.response.data);
            });
        },
        sendForm() {
        this.success = false;
        const data = {
            name: this.name,
            email: this.email,
            message: this.message
        }
        console.log('data_message:',data);
        axios.post(`${this.store.apiBaseUrl}/contacts`, data).then((res) => {
            console.log('risposta_chiamata_api:', res.data);
            this.success = true;
            this.name = '';
            this.address = '';
            this.message = '';
        }).catch((error) => {
            console.log('error.response.data:', error.response.data);
            this.errors = error.response.data.errors;
        })
        // .finally (() => {

        // })
    },
    isValidEmail(email) {
                     const emailRegex = /^(?!.*\.\.)((?!\.)[\w-]+(\.[\w-]+)*)(@[\w-]+)((\.[a-zA-Z]{2,})+)$/;
                     return emailRegex.test(email);
                 },
        },

        mounted() {
        this.getApartment();
            // window.addEventListener('scroll', this.handleScroll) // richiamo della funzione che rende le card sulla destra visibili quando si scorre la pagina

        },

        created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                // react to route changes...
                this.store.methods.getAllApartments();
            }
        )
    },
    }

</script>

<style lang="scss" scoped>
    // questa classe è un tentativo di rendere le card sulla destra visibili quando si scorre la pagina
    // #apartment-description, #apartment-reservation{
    //     padding: 20px;
    //     min-width: 50%;
    //     opacity: 0; /* Hidden initially */
    //     transform: translateX(-100%); /* Move out of view */
    //     transition: transform 0.5s ease-out, opacity 0.5s ease-out; /* Animation for moving and fading in */
    // }

    /* Class for when the element is in the viewport */
    .appear {
        opacity: 1;
        /* Fully visible */
        transform: translateX(0);
        /* Move to the original position */
    }


    #host-info-left {
        padding: 30px;
        min-width: 50%;
    }

    #apartment-info-right {
        padding: 20px;
        min-width: 50%;
    }

    #apartment-description {
        padding: 20px;
        min-width: 50%;
    }

    #contact-form {
        min-width: 100%;
        padding: 20px;
    }

    #apartment-reservation {
        min-width: 50%;
        padding: 20px;
    }

    #apartment-image {
        width: 100%;
        height: 100%;
        box-sizing: content-box;
        box-shadow: 15px 10px 20px rgba(0, 0, 0, 0.3);
        overflow: hidden;
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
        font: 500 17px "Roboto Slab", sans-serif;
        padding: 1em 2em;
        letter-spacing: 0.05rem;
    }

    .ls-glass {
        background-color: hsla(0, 0%, 100%, 0.2);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        border-radius: 15px;
        box-shadow: 15px 10px 13px rgba(0, 0, 0, 0.2);
    }

    .ls-border {
        border: 1px solid #29C1E6;
    }

    .ls-line-right {
        // border-right: 2px solid #29C1E6;
        border-radius: 11px;
        box-shadow: 15px 10px 13px rgba(0, 0, 0, 0.2);
    }

    .ls-line-bot {
        border-bottom: 1px solid #000000;
        width: 100%;
    }

    h1 {
        text-decoration: underline;
        margin: 0px 0px 32px 0px;
        font-weight: 400;
    }
</style>