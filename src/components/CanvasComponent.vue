<template>
<div id="btn-canvas">
  <button id="btn-show" class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight" aria-controls="offcanvasLeft"><i class="fa-solid fa-bars"></i></button>

  </div>

  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
       <!-- buttons -->
       <div class="text-center">
        <p class="">
            <a class="btn" href="#"> <i class="fa-regular fa-id-card"></i>Register </a> or  <a
                class="btn" href="#"><i class="fa-solid fa-unlock-keyhole"></i> Login</a>
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
    top: 10px;
    right: 10px;
    z-index: 1000;
}

.btn {
  background: hsla(0, 0%, 0%, 0.2);
  border: none;
  border-radius: 5px;
  color: white;
  padding: 12px 12px;
}


</style>