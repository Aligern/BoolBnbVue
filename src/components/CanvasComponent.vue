<template>
  <div id="btn-canvas">
    <button id="btn-show" class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars"></i></button>
  </div>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">

    <div class="offcanvas-header">
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <img class="img-fluid" src="../assets/img/B-removebg-preview.png" alt="">
    <div class="offcanvas-body">
      <!-- buttons -->
      <div class="text-center">
        <p class="">
          <a class="btn btn-outline-dark" href="#"> <i class="fa-regular fa-id-card"></i> Register </a> or <a
            class="btn btn-outline-dark" href="#"><i class="fa-solid fa-unlock-keyhole"></i> Login</a>
        </p>
      </div>
    </div>
  </div>


</template>

<script>
import { store } from '../store';
export default {
  name: 'CanvasComponent',
  data() {
    return {
      store,

    }
  },
  methods: {
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
  },

}
</script>


<style lang="scss" scoped>
#btn-canvas {
  position: fixed;
  top: 2.3%;
  right: 10px;
  z-index: 1000;
}
</style>