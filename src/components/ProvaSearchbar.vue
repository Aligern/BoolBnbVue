<template>
    <div>
      <input type="text" v-model="query" @input="handleInput">
      <div id="resultsContainer">
        <div v-for="(result, index) in results" :key="index" @click="selectAddress(result)">
          {{ result.address.freeformAddress }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
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
    },
    methods: {
    //   async fetchApiKey() {
    //     try {
    //       const response = await axios.get('/api/api-key');
    //       if (!response.data.apiKey) {
    //         throw new Error('Chiave API non trovata nel payload');
    //       }
    //       this.apiKey = response.data.apiKey;
    //       console.log('Chiave API recuperata:', this.apiKey);
    //       // Ora che abbiamo la chiave API, possiamo chiamare fetchAddresses o altre operazioni che la richiedono
    //     } catch (error) {
    //       console.error('Errore nel recupero della chiave API:', error.message);
    //     }
    //   },
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
  