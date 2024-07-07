<template>

  <!-- ********************** button to open the offcanvas *********************************** -->
  <div id="btn-canvas">
    <button id="btn-show" class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars"></i></button>
  </div>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <!--****************************** here we have the logo and close button *************************** -->
    <div class="offcanvas-header">

      <div id="logo">
        <img class="img-fluid w-25" src="../assets/img/B-removebg-preview.png" alt="">
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

    </div>

    <div class="offcanvas-body">
      <!-- ******************************* buttons register and login ********************************-->
      <div class="text-center">
        <a class="btn btn-outline-dark" href="#"> <i class="fa-regular fa-id-card"></i> Register </a> or <a
          class="btn btn-outline-dark" href="#"><i class="fa-solid fa-unlock-keyhole"></i> Login</a>
      </div>
      <!-- ****************************** filters section ****************************** -->
      <div id="pageFilter" class="container">

        <h1 class="text-black text-center text-uppercase ">filter</h1>

        <div class="d-flex gap-3">
          <div id="services">
            <h2 class="text-center">Services</h2>

            <div class="d-flex" v-for="service in services" :key="service.id">
              <input id="servcheck" type="checkbox" class="form-check-input me-2 " :value="service.id">
              <label for="servcheck">{{ service.name }}</label>
            </div>
          </div>
          <div id="filter" class="d-flex justify-content-center align-items-center">
            <h1 class="display-1 ">?</h1>
          </div>
        </div>
        <div class="filter-distance">
          <label for="distance-range">Distanza (km):</label>
          <input class="w-75" type="range" id="distance-range" min="0" max="50" value="25">
          <span id="distance-value">25 km</span>
        </div>
      </div>
      <!--inizio mappa e fine del form -->

      <div id="map-container">
        <Map  />
      </div>
    </div>
  </div>


</template>

<script>
  import { store } from '../store';
  import axios from 'axios';
  import Map from '../components/Map.vue';
  export default {
    name: 'CanvasComponent',
    components: {
      Map
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
          this.services = res.data.results;
          //console.log(this.services);
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
      toggleShow() {
        const show = document.querySelector('.offcanvas');
        const btn = document.querySelector('#btn-show');

        btn.addEventListener('click', function () {

          show.classList.toggle('show');
        });
      },

      canvasClose() {
        const show = document.querySelector('.offcanvas');
        const btn = document.querySelector('.btn-close');

        btn.addEventListener('click', function () {

          show.classList.remove('show');
        });
      }
    },

    mounted() {
      this.toggleShow();
      this.canvasClose();
      this.rangeFunction();
      this.getAllServices();
    },

  }
</script>


<style lang="scss" scoped>
  .offcanvas {
    width: 50%;
    z-index: 4800;
    transition: 0.8s ease-in-out;


  }

  #btn-canvas {
    position: fixed;
    top: 2.3%;
    right: 10px;
    z-index: 1000;
  }


  @media screen and (max-width: 576px) {
    .offcanvas {
      width: 100%;
      z-index: 4800;
     

    }
  }

  #servcheck{
    border: none;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 4px 4px 5px 1px rgba(0, 0, 0, 0.2);
  }


  #services,
  #filter,
  .filter-distance {
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


  #map-container {
    width: 100%;
    height: 510px;
    border: 1px solid black;

    overflow: hidden;
  }
</style>