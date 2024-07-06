<template>
    <div>
      <Form @useLocation="useLocation" />
      <div ref="mapRef" id="map"></div>
    </div>
  </template>
  
  <script>
  import Form from './Form.vue'; // Assuming Form.vue is your location input component
  import {onMounted, ref } from 'vue'
  
  export default {
    name: 'Map',
    components: {
      Form,
    },
    setup() {
         const mapRef = ref(null)
 
         onMounted(() => {
             const tt = window.tt;
             const focus = { lat: 6.4434, lng: 3.3553 }
 
             var map = tt.map({
                 key: 'Ka5JcBchkVsJSr3gxVgHPC1NcvPO90lG',
                 container: mapRef.value,
                 center: focus,
                 zoom: 10
             })
 
             map.addControl(new tt.FullscreenControl()); 
             map.addControl(new tt.NavigationControl()); 
 
             window.map = map
 
             // insertLocs(map)
        })
    
        return {
            mapRef
        }

        const useLocation = (location) => {
            state.locations.push(location)
            const lastLocation = state.locations[state.locations.length - 1]
 
            const tete = window.tt;
            new tete.Marker().setLngLat(lastLocation).addTo(window.map) 
        }
    },
  };
  </script>
  
  <style scoped>
  #map {
    width: 100%;
    height: 700px;
    border: 1px solid black;
  }
  </style>