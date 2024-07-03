<template>

  <HeaderComponent />

  <div id="pageFilter" class="container">

    <h1 class="text-black text-center text-uppercase ">filter</h1>

    <div class="d-flex gap-3">
      <div id="services">
        <h2 class="text-center">Services</h2>
       
        <div class="d-flex" v-for="service in services" :key="service.id">
          <input type="checkbox" class="form-check-input me-2 " :value="service.id"  >
          <label for="">{{ service.name }}</label>
        </div>
      </div>
      <div id="filter" class="d-flex justify-content-center align-items-center"><h1 class="display-1 ">?</h1></div>
    </div>
    <div class="filter-distance">
      <label for="distance-range">Distanza (km):</label>
      <input class="w-75" type="range" id="distance-range" min="0" max="50" value="25">
      <span id="distance-value">25 km</span>
    </div>

    <div id="results">
      <h1 class="text-black text-center text-uppercase ">Results</h1>
     <CardComponent />
    </div>


  </div>


</template>

<script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
import { store } from '../store';
import axios from 'axios';
import CardComponent from '@/components/CardComponent.vue';
  export default {
    name: 'Filters',
    components: {

      HeaderComponent,
     
    },
    data() {
      return {
        store,
        services: [],
        distanceRange: 50,
      }
    },
    methods: {
      getAllServices() {
                axios.get(store.apiBaseUrl + '/services').then((res) => {
                    console.log('Response data:', res.data);
                    this.services =  res.data.results;
                    // console.log(this.apartments);
                }).catch(error => {
                    console.error('An error has occurred:', error);
                    console.log('Response data:', error.response.data);
                });
            },


      rangeFunction() {
        const distanceRange = document.getElementById('distance-range');
        const distanceValue = document.getElementById('distance-value');

        distanceRange.addEventListener('input', function () {
          const selectedDistance = distanceRange.value;
          distanceValue.textContent = selectedDistance + ' km';
        });
      },


    },
    mounted() {
      this.rangeFunction();
      this. getAllServices();
        }
    }
 
</script>

<style lang="scss" scoped>

  #services,
  #filter,
  .filter-distance {
    border: 1px solid #29C1E6;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  }

  #services {
    width: 35%;
  }

  #filter {
    width: 65%;
  }

  .filter-distance {
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
  }

  #results {
    width: 100%;
    height: 500px;
    margin-bottom: 10px;
    border: 1px solid #29C1E6;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  }


</style>