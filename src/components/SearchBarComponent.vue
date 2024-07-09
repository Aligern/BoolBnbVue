<template>
  <div id="search-bar" class="absolute">
    <div class="w-75 d-flex">
      <input type="text" class="form-control " placeholder="Search" v-model="query" @keyup.enter="$emit('getPippo')"
        @input="handleInput">
      <router-link :to="{ name: 'results' }" class="btn btn-dark ms-2">
        <i class="fa-solid fa-magnifying-glass"></i>
      </router-link>
    </div>

    <div id="resultsContainer" v-if="results.length > 0">
      <div v-for="(result, index) in results" :key="index" @click="selectAddress(result), $emit('getPippo')">
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

    methods: {
      //funzione per l'effetto scroll
      handleScroll() {
        const scrollPosition = window.pageYOffset;
        const searchBar = document.querySelector('#search-bar'); // Seleziona la barra di ricerca


        if (searchBar) {
          if (scrollPosition > 0) {

            searchBar.className = 'fixed';
          } else {

            searchBar.className = 'absolute';
          };

          if (scrollPosition > 100) {
            searchBar.style.width = '20%';

          } else {
            searchBar.style.width = '50%';

          }
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
          // console.log('pippo.filteredApart:', store.filteredApart)
          const pippo = await store.methods.fetchApartments(fixedPoint.latitude, fixedPoint.longitude, 20);
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
        this.$router.push({ name: 'results' });
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);//javascript per l'effetto scroll
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