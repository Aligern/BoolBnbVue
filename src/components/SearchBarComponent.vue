<template>
  <div ref="dropdown" id="search-bar" class="absolute">
    <div class="d-flex"><input id="searchInput" type="text" class="form-control" placeholder="Search" v-model="query"
        @keyup.enter="$emit('getPippo')" @input="handleInput" ><router-link
        :to="resultsRoute" class="btn btn-dark ms-2"><i class="fa-solid fa-magnifying-glass"></i></router-link></div>
    <div id="resultsContainer" v-if="results.length > 0">
      <div v-for="(result, index) in results" :key="index" @click="selectAddress(result)"> {{
        result.address.freeformAddress }} </div>
    </div><!-- collapse contenente i filtri -->
    
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
      

    };
  },

  methods: {
    //funzione per l'effetto scroll
    handleScroll() {
      const scrollPosition = window.pageYOffset;
      const searchBar = document.querySelector('#search-bar'); // Seleziona la barra di ricerca
      const inputSearch = document.querySelector('#searchInput'); // Seleziona l'input di ricerca

      if (searchBar) {
          if (scrollPosition > 0) {

            searchBar.className = 'fixed';
          } else {

            searchBar.className = 'absolute';
          };

          if (scrollPosition > 100) {
            searchBar.style.padding = '3px';
          } else {
            searchBar.style.padding = '15px';
          }
        }

    },
   
    //funzione per la chiamata della chiave API
    async fetchAddresses(query) {
      const url = `${this.apiBaseUrlTomTom}${encodeURIComponent(query)}.json?key=${this.apiKey}`;

      try {
        const response = await axios.get(url);
        if (!response.data.results) {
          throw new Error('Nessun risultato trovato.');
        }
        const fixedPoint = response.data.results[0].position;
        const pippo = await store.methods.fetchApartments(fixedPoint.lon, fixedPoint.lat, store.radius);
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
  },
 

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
    'store.radius'() {
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

}



.absolute {
  position: absolute;
  top:5px;
  left: 50%;

}

.fixed {
  position: fixed;
  top: 5px;
  left: 50%;
  z-index: 2000;

}
</style>