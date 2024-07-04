import { reactive } from "vue";
import axios from "axios";

export const store = reactive({

    apiBaseUrl: "http://127.0.0.1:8000/api",
    imgBasePath: "http://127.0.0.1:8000/storage/",
    apiKey: '0jBqWMEnJXQa5y2e2pJLK0gXbe7CTMvK',
    apartments: [],
    filteredApart: [],


    methods: {
        getAllApartments() {
            axios.get(store.apiBaseUrl + '/apartments').then((res) => {
                console.log('Response data:', res.data);
                store.apartments = res.data.results;
                const pluto = this.filterApartments();
                //  console.log(this.apartments);
                store.filteredApart = pluto;
                return  pluto;
            }).catch(error => {
                console.error('An error has occurred:', error);
                console.log('Response data:', error.response.data);
            });
        },
        filterApartments() {
            // console.log('Original apartments:', this.apartments);
            const filteredApartments = this.apartments.map(apartment => {

                const lat = apartment.latitude || (apartment.location && apartment.location.latitude);
                const lon = apartment.longitude || (apartment.location && apartment.location.longitude);

                return {
                    result: apartment,
                    lat: lat,
                    lon: lon
                };
            });

             console.log('Filtered apartments:', filteredApartments);
            return filteredApartments;
        },
    }
});

