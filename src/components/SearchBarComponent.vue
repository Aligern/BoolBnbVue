<template>
  <div ref="dropdown" id="search-bar" class="absolute">
    <div class="d-flex">
      <input id="searchInput" type="text" class="form-control" placeholder="Search" v-model="query"
        @keyup.enter="handleSearch" @input="handleInput">
      <router-link :to="resultsRoute" class="btn btn-dark ms-2">
        <i class="fa-solid fa-magnifying-glass"></i>
      </router-link>
    </div>
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
      apiKey: '0jBqWMEnJXQa5y2e2pJLK0gXbe7CTMvK',
      apiBaseUrlTomTom: 'https://api.tomtom.com/search/2/search/',
    };
  },
  methods: {
    async fetchCoordinates(query) {
      const url = `${this.apiBaseUrlTomTom}${encodeURIComponent(query)}.json?key=${this.apiKey}`;
      try {
        const response = await axios.get(url);
        if (!response.data.results) {
          throw new Error('Nessun risultato trovato.');
        }
        const fixedPoint = response.data.results[0].position;
        console.log('fetchCoordinates - fixedPoint:', fixedPoint); // Log
        return fixedPoint;
      } catch (error) {
        console.error('Errore durante la ricerca degli indirizzi:', error.message);
        return null;
      }
    },
    async fetchSuggestions(query) {
      const url = `${this.apiBaseUrlTomTom}${encodeURIComponent(query)}.json?key=${this.apiKey}`;
      try {
        const response = await axios.get(url);
        if (!response.data.results) {
          throw new Error('Nessun risultato trovato.');
        }
        console.log('fetchSuggestions - results:', response.data.results); // Log
        return response.data.results;
      } catch (error) {
        console.error('Errore durante la ricerca dei suggerimenti:', error.message);
        return [];
      }
    },
    async fetchAddresses(query) {
      const fixedPoint = await this.fetchCoordinates(query);
      if (fixedPoint) {
        const pippo = await store.methods.fetchApartments(fixedPoint.lon, fixedPoint.lat, store.radius);
        console.log('fetchAddresses - pippo:', pippo); // Log
        this.$emit('updateResults', pippo);
        store.pippo = pippo;
      }
    },
    async handleSearch() {
      if (this.query) {
        await this.fetchAddresses(this.query);
      }
    },
    async handleInput() {
      const query = this.query.trim();
      if (query.length < 5) {
        this.results = [];
        return;
      }
      try {
        const results = await this.fetchSuggestions(query);
        this.results = results;
      } catch (error) {
        console.error('Errore durante la gestione dell\'input:', error);
      }
    },
    selectAddress(result) {
      this.query = result.address.freeformAddress;
      this.results = [];
      this.handleSearch();
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

  #filter {
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
}

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