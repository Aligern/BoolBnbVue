<template>
  <div>
    <div id="modal" :class="{ 'd-none': !this.store.openModalChange }">
      <div id="info">
        <div class=" d-flex justify-content-between flex-column">
          <h1 class="text-black text-center ">content</h1>
          <input type="checkbox" class="form-check-input ">
          <label for=""></label>
          <input type="checkbox" class="form-check-input ">
          <input type="checkbox" class="form-check-input ">
          <input type="checkbox" class="form-check-input ">
          <input type="checkbox" class="form-check-input ">
          <input type="checkbox" class="form-check-input ">
          <input type="checkbox" class="form-check-input ">
          <input type="checkbox" class="form-check-input ">
          <input type="checkbox" class="form-check-input ">
          <input type="checkbox" class="form-check-input ">
          <input type="checkbox" class="form-check-input ">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../store';
  export default {
    name: 'ModalSearchComponent',
    data() {
      return {
        store
      }
    },


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
    left: 712px;
    border-radius: 10px;
    border: 1px solid #29C1E6;
    box-shadow: 15px 10px 13px rgba(0, 0, 0, 0.2);
    z-index: 4001;
    display: flex;
    justify-content: center;





    #info {
      height: 100%;
      width: 100%;

      color: rgb(0, 0, 0);
      position: relative;
      top: 0;
      animation: modal-comparsa 0.5s ease-in-out forwards;




      //div container for close button
      #close {
        height: 35px;
        width: 35px;
        margin-left: auto;
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 2000;

        //close button
        #closed {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
          width: 30px;
        }



      }
    }
  }

  @keyframes modal-comparsa {
    from {
      opacity: 0;
      transform: scale(0.5);
      /* Riduce il modale all'inizio dell'animazione */
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media screen and (max-width: 992px) {
    #modal {
      overflow-y: auto;

      #info {
        height: 800px;
        width: 500px;
        background-color: black;
        color: white;
        overflow: hidden;
        position: relative;
        top: 50px;
        animation: modal-comparsa 0.5s ease-in-out forwards;
      }
    }
  }

</style>