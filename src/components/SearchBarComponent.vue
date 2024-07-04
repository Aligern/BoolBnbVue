<template>
<div id="search-bar" class="absolute">

<!-- search bar -->
    <div class="w-75 d-flex">
      <input type="text" class="form-control " placeholder="Search" v-model="query" @input="handleInput">

      <!-- search button -->
      <RouterLink :to="{ name: 'results' }">
        <div  class="btn btn-dark ms-2">
              <i class="fa-solid fa-magnifying-glass">
              </i>
        </div>
      </RouterLink>

    </div>

<!-- results -->
<div id="resultsContainer" v-if="results.length > 0">
    <div v-for="(result, index) in results" :key="index" @click="selectAddress(result)">
      {{ result.address.freeformAddress }}
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
      apiBaseUrl: 'https://api.tomtom.com/search/2/search/'
    };
  },
  mounted() {
    //   this.fetchApiKey(); // Chiamata al metodo per recuperare la chiave API al montaggio del componente
    window.addEventListener('scroll', this.handleScroll);//javascript per l'effetto scroll
  },
  methods: {
    //funzione per l'effetto scroll
    handleScroll() {
      const scrollPosition = window.pageYOffset;
      const searchBar = document.querySelector('#search-bar'); // Seleziona la barra di ricerca
      const modale = document.querySelector('#modal'); // Seleziona la barra di ricerca
      if (scrollPosition > 129) {
        searchBar.style.width = '20%';
        searchBar.className = 'fixed';
      } else {
        searchBar.style.width = '50%';
        searchBar.className = 'absolute';
      }
    },
    //funzione per la chiamata della chiave API
    async fetchAddresses(query) {
      const url = `${this.apiBaseUrl}${encodeURIComponent(query)}.json?key=${this.apiKey}`;
      try {
        const response = await axios.get(url);
        if (!response.data.results) {
          throw new Error('Nessun risultato trovato.');
        }
        // console.log('Risultati ricevuti:', response.data.results);
        // console.log('Risultati posizioni:', response.data.results[0].position);
        const fixedPoint = response.data.results[0].position;
        // console.log('fixedPoint:', fixedPoint);
        console.log('pippo.filteredApart:', store.filteredApart)
        const pippo = this.makeCircleDistance(fixedPoint, store.filteredApart, 20);
        this.researchResults = pippo;
        store.pippo = pippo;

        console.log('pippo:', store.pippo);
        return response.data.results;

      } catch (error) {
        console.error('Errore durante la ricerca degli indirizzi:', error.message);
        return [];
      }
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
    selectAddress(result) {
      this.query = result.address.freeformAddress;
      this.results = [];
    },
    //conversione da gradi a radianti
    conversiontoradians(degrees) {
      return degrees * Math.PI / 180;
    },
    //calcolo distanza tra due punto con cordinate gps
    distanceBetweenTwoPoints(fixedPoint, movinPpoint) {
      //mi salvo le cordinate in modo separato del punto fisso 
      const R = 6371; // Raggio della Terra in km
      const fpLat = this.conversiontoradians(fixedPoint.lat);
      const fpLon = this.conversiontoradians(fixedPoint.lon);
      //mi salvo le cordinate in modo separato del punto mobile
      const mpLat = this.conversiontoradians(movinPpoint.lat);
      const mpLon = this.conversiontoradians(movinPpoint.lon);
      //differenza delle cordinate sempre in modo separato
      const deltaLat = Math.abs(fpLat - mpLat);
      const deltaLon = Math.abs(fpLon - mpLon);
      //applico la formula di Haversine 
      //prima parte della formula
      const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) + Math.cos(fpLat) * Math.cos(mpLat) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
      //seconda parte della formula
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      //ritorno la distanza
      return R * c; // Distanza in km
    },

    //calcolo raggio ricerca
    makeCircleDistance(fixedPoint, movinPpoints, searchRadius) {
      let result = [];
      for (const movinPpoint of movinPpoints) {
        if (this.distanceBetweenTwoPoints(fixedPoint, movinPpoint) <= searchRadius) {
          result.push(movinPpoint);
        }
      }
      return result;
    },
  },
  mounted() {
    store.methods.getAllApartments();
  },
};
</script>

<style lang="scss" scoped>
#search-bar {
  display: flex;
  align-items: center;
  flex-direction: column;


  transform: translateY(-50%);
  transform: translateX(-50%);
  width: 50%;

  transition: width 1.2s ease;
  //box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);

  border-radius: 25px;

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
  top: 100px;
  left: 50%;
}

.fixed {
  position: fixed;
  top: 3px;
  left: 50%;
  z-index: 2000;
}
</style>