<template>
  <div>

    <div ref="mapRef" id="map"></div>
  </div>
</template>

<script>
// -------------------------- ATTENZIONE! --------------------------
// Necessario creare un file script.js fratello di store.js
// scrivere quanto segue: 
// import { reactive } from "vue";
// export const script = reactive({
// TOMTOM_API_KEY: 'la tua API_KEY dal sito TomTom Api',
// });
// -------------------------- ATTENZIONE! --------------------------
  import { script } from '@/script';
  import { store } from '@/store';
  import { onMounted, reactive, ref } from 'vue'

  export default {
    name: 'Map',
    data() {
      return {
        store
      }
    },

    setup() {
      const mapRef = ref(null)
      const state = reactive({
        locations: [
          { lng: 15.29470985780, lat: 37.85263650717430 },

        ]
      })
      const insertLocs = (map) => {
        const tomtom = window.tt;

        store.apartments.forEach(function (apartment) {
          var marker = new tomtom.Marker().setLngLat([apartment.longitude, apartment.latitude]).addTo(map)
          const popup = new tt.Popup({ anchor: 'top' }).setText(apartment.address)
          marker.setPopup(popup).togglePopup()
        })
      }

      onMounted(() => {
        const tt = window.tt;
        const focus = { lat: 37.31052000000000, lng: 13.64791000000000 }

        var map = tt.map({
          key: script.TOMTOM_API_KEY,
          container: mapRef.value,
          center: focus,
          zoom: 7
        })

        map.addControl(new tt.FullscreenControl());
        map.addControl(new tt.NavigationControl());

        window.map = map

        insertLocs(map)
      })

      return {
        mapRef
      }

    },
  };
</script>

<style scoped>
  #map {
    width: 100%;
    height: 700px;
  }
</style>