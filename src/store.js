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
        async fetchApartments($latitude,$longitude, $radius) {
            try {
              const response = await axios.get(`${this.apiBaseUrl}/apartments`, {
                params: {
                  latitude: $latitude,
                  longitude: $longitude,
                  radius: $radius
                }
              });
             return response.data.results;
            } catch (error) {
              this.error = 'Si è verificato un errore durante il recupero degli appartamenti: ' + error.message;
              console.error(error);
            }
          }
      ,
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



