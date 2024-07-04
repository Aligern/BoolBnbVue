<template>
  <div id="search-bar" class="absolute">
    <input type="text" class="form-control w-75" placeholder="Search" v-model="query" @input="handleInput">
    <div id="resultsContainer" v-if="results.length > 0">
      <div v-for="(result, index) in results" :key="index" @click="selectAddress(result)">
        {{ result.address.freeformAddress }}
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios';

  export default {
    name: 'SearchBarComponent',
    data() {
      return {
        query: '',
        results: [],
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

      //   async fetchApiKey() {

      //funzione per la chiamata della chiave API
      async fetchAddresses(query) {
        if (!this.apiKey) {
          console.error('Chiave API non disponibile.');
          return Promise.resolve([]); // Ritorna una Promise vuota se la chiave API non è disponibile
        }

        const url = `${this.apiBaseUrl}${encodeURIComponent(query)}.json?key=${this.apiKey}`;

        try {
          const response = await axios.get(url);
          if (!response.data.results) {
            throw new Error('Nessun risultato trovato.');
          }
          console.log('Risultati ricevuti:', response.data.results);
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
      }
    }
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