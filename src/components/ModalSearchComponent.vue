<template>

  <div id="modal" :class="{ 'd-none': !this.store.openModalChange }">

    <h1 class="text-black text-center ">content</h1>

    <div class="d-flex gap-3">
      <div id="services">
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Parking</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">WiFi</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Kitchen</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Swimming Pool</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Air Conditioning</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Heating</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Dryer</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Gym</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Elevator</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Pet Friendly</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Smoke Detector</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Laptop-friendly Workspace</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Cable TV</label>
        </div>
      </div>
      <div id="filter"></div>
    </div>
    <div class="filter-distance">
      <label for="distance-range">Distanza (km):</label>
      <input class="w-75" type="range" id="distance-range" min="0" max="50" value="25">
      <span id="distance-value">25 km</span>
    </div>


  </div>



</template>

<script>
  import { store } from '../store';
  export default {
    name: 'ModalSearchComponent',
    data() {
      return {
        store,
        distanceRange: 50,
      }
    },
    methods: {


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
      this.rangeFunction()
    }


  }
</script>

<style lang="scss" scoped>

  //stars of the vote
  .stars {
    color: gold;
  }

  //modal component
  #modal {
    height: 500px;
    width: 700px;
    background-color: rgb(253, 253, 253);
    position: absolute;
    top: 10px;
    border-radius: 10px;
    border: 1px solid #29C1E6;
    box-shadow: 15px 10px 13px rgba(0, 0, 0, 0.2);
    z-index: 4001;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;

    animation: modal-comparsa 0.5s ease-in-out forwards;

  }

  @keyframes modal-comparsa {
    0% {
      opacity: 0;
      transform: translateY(-100);
      /* Riduce il modale all'inizio dell'animazione */
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 992px) {
    #modal {
      overflow-y: auto;

    }
  }

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
  }

</style>