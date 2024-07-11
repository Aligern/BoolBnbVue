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
  import { onMounted, reactive, ref, watch } from 'vue'

  export default {
  name: 'Map',
  setup() {
    const mapRef = ref(null);
    const map = ref(null);

    const initMap = () => {
      const tt = window.tt;
      const focus = { lat: 37.31052, lng: 13.64791 };

      map.value = tt.map({
        key: script.TOMTOM_API_KEY,
        container: mapRef.value,
        center: focus,
        zoom: 7,
      });

      map.value.addControl(new tt.FullscreenControl());
      map.value.addControl(new tt.NavigationControl());
    };

    const insertLocs = () => {
      if (map.value) {
        // Rimuove eventuali marker precedenti
        const existingMarkers = document.querySelectorAll('.tt-marker');
        existingMarkers.forEach(marker => marker.remove());

        // Aggiunge i nuovi marker
        store.apartments.forEach((apartment) => {
          const marker = new tt.Marker().setLngLat([apartment.longitude, apartment.latitude]).addTo(map.value);
          const popup = new tt.Popup({ anchor: 'top' }).setText(apartment.address);
          marker.setPopup(popup).togglePopup();
        });
      }
    };

    onMounted(() => {
      // Inizializza la mappa solo se ci sono già dati negli appartamenti
      if (store.apartments.length > 0) {
        initMap();
        insertLocs();
      }

      // Guarda i cambiamenti negli appartamenti e aggiorna la mappa di conseguenza
      watch(() => store.apartments, (newApartments) => {
        if (newApartments.length > 0) {
          if (!map.value) {
            initMap();
          }
          insertLocs();
        }
      }, { immediate: true, deep: true });
    });

    return {
      mapRef,
    };
  },
};
</script>

<style scoped>
  #map {
    width: 100%;
    height: 600px;
  }

 
</style>