import { reactive } from "vue";
import axios from "axios";
import { script } from "./script";

export const store = reactive({
  apiBaseUrl: "http://127.0.0.1:8000/api",
  imgBasePath: "http://127.0.0.1:8000/storage/",
  apiKey: script.TOMTOM_API_KEY,
  apartments: [], //contiene tutti gli appartamenti
  filteredApart: [],
  pippo: [], //array con appartamenti filtrati per distanza
  imageBaseUrl: "./assets/img/",
  services: [], //contine tutti i servizi
  users: [],
  promotions: [],

  selectedServices: [], // contiene gli ID dei services checkati nel canvas... serve per le filter
  beds: 0,
  rooms: 0,

  radius: 20,
  searchCanv:'',

  methods: {
    async fetchApartments(latitude, longitude, radius) {
      try {
        const response = await axios.post(`${store.apiBaseUrl}/search`, {
          longitude,
          latitude,
          radius,
          beds: store.beds,
          rooms: store.rooms,
          services: store.selectedServices.length > 0 ? store.selectedServices : []
        });
        console.log("longitude:", longitude);
        console.log("latitude:", latitude);
        console.log("radius:", radius);
        console.log("beds:", store.beds);
        console.log("rooms:", store.rooms);
        console.log("selectedServices:", store.selectedServices);

        console.log("response:", response);
        console.log("response.data:", response.data);
        console.log("response.data.resultsAPI:", response.data.results);
        return response.data.results;
      } catch (error) {
        this.error = "Si è verificato un errore durante il recupero degli appartamenti: " + error.message;
        console.error(error);
      }
    },


    async fetchAllServices() {
      const response = await axios.get(store.apiBaseUrl + "/services");
      store.services = response.data.results;
      console.log("Servizi OK!", store.services);
      return response;
    },
    async fetchAllUsers() {
      const response = await axios.get(store.apiBaseUrl + "/users");
      store.users = response.data.results;
      console.log("Users OK!", store.users);
      return response;
    },

    async fetchAllPromotions() {
      const response = await axios.get(store.apiBaseUrl + "/promotions");
      store.promotions = response.data.results;
      console.log("Promozioni OK!", store.promotions);
      return response;
    },
  },
});
