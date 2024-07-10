<template>
  <JumbotronComponent />
  <SearchBarComponent />

    <!-- these are the promoted cards -->
<div id="promoted" class="p-5 container-fluid">
<h2 class="mt-5 ms-5 text-decoration-underline">Promoted</h2>
<div class="d-flex justify-content-between flex-wrap ls-glass p-5 d-flex overflow-x-scroll" ref="CardScrollContainer">
  <div class="" v-for="(apartment, index) in store.apartments" :key="apartment.id">
    <CardComponent :item="apartment" :index="index"/>
 </div>
</div>
</div>    
</template>


<script>
import CardComponent from '@/components/CardComponent.vue';
import JumbotronComponent from '@/components/JumbotronComponent.vue';
import SearchBarComponent from '@/components/SearchBarComponent.vue';
import { store } from '@/store.js';
import axios from 'axios';

export default {
    name: 'ApartmentsList',
    components: {
        CardComponent,
        JumbotronComponent,
        SearchBarComponent
    },
    data() {
        return {
            store,
            
        }
    },
    methods: {
      getAllApartments() {
        axios.get(store.apiBaseUrl + '/apartments').then((res) => {
          console.log('Response data:', res.data);
          this.store.apartments = res.data.results;
          console.log(this.store.apartments);
        }).catch(error => {
          console.error('An error has occurred:', error);
          console.log('Response data:', error.response.data);
        });
      },
    },
    mounted() {
      this.getAllApartments();
    }
}
</script>





<style lang="scss" scoped>

.draw-border::before, .draw-border::after {
border: 0 solid transparent;
box-sizing: border-box;
border-radius: 3px;
content: "";
pointer-events: none;
position: absolute;
width: 0;
height: 0;
bottom: 0;
right: 0;
}

.draw-border::before {
border-bottom-width: 4px;
border-left-width: 4px;
}

.draw-border::after {
border-top-width: 4px;
border-right-width: 4px;
}

.draw-border:hover {
color: #ffffff;
background-color: rgba($color: #000000, $alpha: 0.3);
transition: background-color 2.35s;
}

.draw-border:hover::before, .draw-border:hover::after {
border-color: #000000;
transition: border-color 0s, width 0.25s, height 0.25s;
width: 100%;
height: 100%;
}

.draw-border:hover::before {
transition-delay: 0s, 0s, 0.25s;
}

.draw-border:hover::after {
transition-delay: 0s, 0.25s, 0s;
}

.btn {
background: none;
border: none;
cursor: pointer;
line-height: 1.5;
font: 700 17px "Roboto Slab", sans-serif;
padding: 1em 2em;
letter-spacing: 0.05rem;
}

.ls-btn-left, .ls-btn-right {
  position: relative;
  padding: 30px 10px;
  position: absolute;
  transform: translateY(-255%);
  z-index: 1000;
}
.ls-btn-left {
  left: 10px;
}
.ls-btn-right {
  right: 10px;
}

#CardScrollContainer {
  display: flex;
  align-items: center;
  overflow-x: scroll;
}

.d-flex.justify-content-between.position-relative {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 20px;
}
</style>