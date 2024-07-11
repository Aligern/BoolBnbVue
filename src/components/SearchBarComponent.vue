<template>
 div ref="dropdown" id="search-bar" class="absolute">
    <div class=" d-flex">
      <input id="searchInput" type="text" class="form-control " placeholder="Search" v-model="query"
        @keyup.enter="$emit('getPippo')" @input="handleInput" @click="toggleCollapse('collapse1')">
      <router-link :to="resultsRoute" class="btn btn-dark ms-2">
        <i class="fa-solid fa-magnifying-glass"></i>
      </router-link>
    </div>
    <div id="resultsContainer" v-if="results.length > 0">
      <div v-for="(result, index) in results" :key="index" @click="selectAddress(result)">
        {{ result.address.freeformAddress }}
      </div>
    </div>
    <!-- collapse contente i filtri -->
    <div v-show="isOpen === 'collapse1'" class="collapse show" id="collapse1">

      <h1 class="text-black text-center text-uppercase ">filter</h1>

      <div class="d-flex gap-3">
        <div id="services">
          <h2 class="text-center">Services</h2>

          <div class="d-flex" v-for="service in store.services" :key="service.id">
            <input id="servcheck" type="checkbox" class="form-check-input me-2" :value="service.id"
              v-model="store.selectedServices" @input="console.log('store.selectedServices:', store.selectedServices)">
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
            <label for="distance-range">Distanza (km):</label> <span id="distance-value">  {{ store.radius }}</span> <br>
            <input class="w-75" type="range" id="distance-range" min="1" max="100" value="20" v-model="store.radius">
           
          </div>
        </div>

      </div>
  </div>


</template>

<script>

  import axios from 'axios';
  import { store } from '@/store.js';

  export default {
    name: 'SearchBarComponent',

    data() {
      return {
        store,
        query: '',
        results: [],
        researchResults: [],
        apiKey: '0jBqWMEnJXQa5y2e2pJLK0gXbe7CTMvK',
        apiBaseUrlTomTom: 'https://api.tomtom.com/search/2/search/',
        isOpen: null,
        
      };
    },

    methods: {
      //funzione per l'effetto scroll
      handleScroll() {
        const scrollPosition = window.pageYOffset;
        const searchBar = document.querySelector('#search-bar'); // Seleziona la barra di ricerca
        const inputSearch = document.querySelector('#searchInput'); // Seleziona l'input di ricerca
        
                if (scrollPosition > 100) {
            inputSearch.style.padding = '3px';
          } else {
            inputSearch.style.padding = '15px';
          }
        }
      },

      // funzioni del collapse
      toggleCollapse(collapseId) {
        this.isOpen = this.isOpen === collapseId ? null : collapseId;
      },
      handleClickOutside(event) {
        if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
          this.isOpen = null;
        }
      },

      //funxione per il range di distanza
      rangeFunction() {
        const distanceRange = document.getElementById('distance-range');
        const distanceValue = document.getElementById('distance-value');

        distanceRange.addEventListener('input', function () {
          const selectedDistance = distanceRange.value;
          distanceValue.textContent = selectedDistance + ' km';
        });
      },



    //funzione per la chiamata della chiave API


    async fetchAddresses(query) {
      const url = `${this.apiBaseUrlTomTom}${encodeURIComponent(query)}.json?key=${this.apiKey}`;

      try {
        const response = await axios.get(url);
        if (!response.data.results) {
          throw new Error('Nessun risultato trovato.');
        }
        // console.log('Risultati ricevuti:', response.data.results);
        // console.log('Risultati posizioni:', response.data.results[0].position);
        const fixedPoint = response.data.results[0].position;
        // console.log('fixedPoint:', fixedPoint);
        // console.log('pippo.filteredApart:', store.filteredApart)

       //funzione per la chiamata della chiave API

    async fetchAddresses(query) {
      const url = `${this.apiBaseUrlTomTom}${encodeURIComponent(query)}.json?key=${this.apiKey}`;

      try {
        const response = await axios.get(url);
        if (!response.data.results) {
          throw new Error('Nessun risultato trovato.');
        }
        const fixedPoint = response.data.results[0].position;
        const pippo = await store.methods.fetchApartments(fixedPoint.lon, fixedPoint.lat, 20);
        console.log('researchResults:', this.researchResults)
        this.researchResults = pippo;
        store.pippo = pippo;
        this.$emit('updateResults', pippo);

        console.log('pippo:', store.pippo);
        return response.data.results;

      } catch (error) {
        console.error('Errore durante la ricerca degli indirizzi:', error.message);
        return [];
      }
    },
    updateSearch() {
      if (this.query) {
        this.fetchAddresses(this.query);
      }
    },
    selectAddress(result) {
      this.query = result.address.freeformAddress;
      this.results = [];
      this.updateSearch(); // Aggiorna la ricerca dopo la selezione dell'indirizzo
    },
    handleInput() {
      const query = this.query.trim();
      if (query.length < 5) {
        this.results = [];
        return;
      }
      this.fetchAddresses(query)
        .then(results => {
          this.results = results;

        })
        .catch(error => {
          console.error('Errore durante la gestione dell\'input:', error);
        });
    },
  },
  computed: {
    resultsRoute() {
      return {
        name: 'results',
        query: {
          address: this.query,
        },
      };
    },
  },
  
  mounted() {
      window.addEventListener('scroll', this.handleScroll);//javascript per l'effetto scroll
      document.addEventListener('click', this.handleClickOutside);// jasvascript per il collapse
      this.rangeFunction();//funzione per il range
    },
    beforeUnmount() {//javascript per il collapse
      document.removeEventListener('click', this.handleClickOutside);

  watch: {
    'store.beds'() {
      this.updateSearch();
    },
    'store.rooms'() {
      this.updateSearch();
    },
    'store.selectedServices'() {
      this.updateSearch();
    },
  }
};
</script>




<style lang="scss" scoped>

  .active {
    // classe del collapse in searchbar
    background-color: #44444420;
  }

 
  #collapse1 {
    background-color: white;
    width: 100%;
    height: 450px;
    border-radius: 5px;
    padding: 10px;
    border-bottom: 0p;
    cursor: pointer;
    display: block;
    transition: display 1.2s ease;

    #filter{
      width: 100%;
    }
  }

  #search-bar {
    display: flex;
    align-items: start;
    flex-direction: column;
    z-index: 3000;
    width: 800px;
    transform: translateY(-50%);
    transform: translateX(-50%);
    transition: padding 1.2s ease;
    //box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    border-radius: 25px;

    #searchInput {
      transition: padding 0.9s ease;
      padding: 15px;
      width: 800px;
    }
  

    #resultsContainer {
      background-color: white;
      width: 100%;
      border-radius: 5px;
      padding: 10px;
      border-bottom: 0p;
      cursor: pointer;


  #resultsContainer {
    background-color: white;
    width: 75%;
    border-radius: 5px;
    padding: 10px;
    border-bottom: 0p;
    cursor: pointer;

  }

}



.absolute {
  position: absolute;
  top: 25px;
  left: 50%;

}

.fixed {
  position: fixed;
  top: 25px;
  left: 50%;
  z-index: 2000;

}
</style>