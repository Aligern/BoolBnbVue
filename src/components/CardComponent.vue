<template>


<!-- card -->
<div id="ls-card-container" class="">
<!-- <RouterLink  class="ls-card"> -->
  <div class="ls-card">
    <!-- promoted logo -->
      <div class="promoted-logo">
        promoted-logo
      </div>
    <!-- service logos -->
      <router-link v-for="(item, index) in store.services" :to="{ name: 'results', query: { slug: item.slug } }" 
      class="service-logos">
       <i class="fas fa-chevron-right"></i>
      </router-link>
    <!-- image -->
      <img :src="store.imgBasePath + item.image_cover" :alt="item.name">
      <!-- content -->
      <div class="card-content">
        <!-- title -->
        <h2>{{ item.name }}</h2>
        <!-- description -->
        <p>
          {{ item.description }}
        </p>
        <!-- button -->
        <router-link :to="{ name: 'details', query: { slug: item.slug } }" class="button">
          More informations
          <span>
            <i class="fas fa-chevron-right"></i>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store';
export default {
  name: 'CardComponent',
  props: [
    'item',
  ],
  data() {
    return {
      store
    }
  },
  computed: {

  },
  methods: {

  },

}
</script>

<style lang="scss" scoped>

#ls-card-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;

  .ls-card {
    position: relative;
    width: 24rem;
    height: 20rem;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    color: rgb(255, 255, 255);
    box-shadow: 0 10px 10px 3px rgba(0, 0, 0, 0.2);

    img {
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0.9;
      transition: opacity .2s ease-out;
    }

    h2 {
      z-index: 2;
      position: absolute;
      inset: auto auto 40px 40px;
      margin: 0;
      transition: inset .3s .3s ease-out;
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: normal;
      text-transform: uppercase;
    }

    p,
    a {
      z-index: 2;
      position: absolute;
      opacity: 0;
      max-width: 80%;
      transition: opacity .3s ease-out;
    }

    p {
      inset: auto auto 80px 30px;
    }

    a {
      inset: auto auto 40px 30px;
      color: inherit;
      text-decoration: none;
    }
// overlay style
.service-logos { // Services logos
      position: absolute;
      top: 10px;
      left: 285px;
      opacity: 0;
      transition: opacity 0.3s ease-out;
      z-index: 2000;
    }

    .promoted-logo { // Promoted logo

      position: absolute;
      top: 10px;
      left: 10px;
      opacity: 0;
      transition: opacity 0.3s ease-out;
      z-index: 2000;
    }


    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2); // Base overlay color
    transition: background-color 0.3s ease-in;
    z-index: 1;
  }

  &:hover::before {
    background-color: rgba(0, 0, 0, 0.5); // Darker overlay color
  }

    &:hover h2 {
      inset: auto auto 180px 30px;
      transition: inset .3s ease-out;
      z-index: 2; // needed to appear on top of the overlay
    }

    &:hover p,
    &:hover a {
      opacity: 1; // needed to appear on top of the overlay
      transition: opacity .5s .1s ease-in;
    }

    &:hover img {
      transition: opacity .3s ease-in;
      background-color: hsla(0, 0%, 100%, 0.2);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
      border-radius: 15px;
      box-shadow: 10px 10px 13px rgba(0, 0, 0, 0.2);
    }
  }

  .material-symbols-outlined {
    vertical-align: middle;
  }

    &:hover .service-logos {
      opacity: 1; // Renderlo visibile al passaggio del mouse
    }

    &:hover .promoted-logo {
      opacity: 1; // Renderlo visibile al passaggio del mouse
    }
  

}
</style>