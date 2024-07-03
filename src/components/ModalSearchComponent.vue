<template>

  <div id="modal" :class="{ 'd-none': !this.store.openModalChange }">

    <h1 class="text-black text-center ">content</h1>




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

</style>