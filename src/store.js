import { reactive } from "vue";
import axios from "axios";

export const store = reactive({

    apiBaseUrl: "http://127.0.0.1:8000/api",
    imgBasePath: "http://127.0.0.1:8000/storage/",
    apiKey: '0jBqWMEnJXQa5y2e2pJLK0gXbe7CTMvK',
    apartments: [],
    filteredApart: [],
    pippo: [],
    imageBaseUrl: './assets/img/',
    services: [],
    users: [],
    promotions: [],


    methods: {
        getAllApartments() {
            axios.get(store.apiBaseUrl + '/apartments').then((res) => {
                console.log('Response data:', res.data);
                store.apartments = res.data.results;
                const pluto = store.methods.filterApartments();
                // console.log('provaprova:', store.apartments);
                store.filteredApart = pluto;
                // console.log('pluto:', pluto);
                // console.log('pippo nello sotre:', pippo);
                return  pluto;
            }).catch(error => {
                console.error('An error has occurred:', error);
                console.log('Response data:', error.response.data);
            });
        },
        filterApartments() {
            console.log('Original apartments:', store.apartments);
            const filteredApartments = store.apartments.map(apartment => {

                const lat = apartment.latitude || (apartment.location && apartment.location.latitude);
                const lon = apartment.longitude || (apartment.location && apartment.location.longitude);

                return {
                    result: apartment,
                    lat: lat,
                    lon: lon
                };
            });

            // console.log('Filtered apartments:', filteredApartments);
            return filteredApartments;
        },
        async fetchAllServices() {
            const response = await axios.get(store.apiBaseUrl + '/services');
            store.services = response.data.results;
            console.log('Servizi OK!', store.services);
            return response;
        },
        async fetchAllUsers() {
            const response = await axios.get(store.apiBaseUrl + '/users');
            store.users = response.data.results;
            console.log('Users OK!', store.users);
            return response;
        },

        async fetchAllPromotions() {
            const response = await axios.get(store.apiBaseUrl + '/promotions');
            store.promotions = response.data.results;
            console.log('Promozioni OK!', store.promotions);
            return response;
        },
    }
});



