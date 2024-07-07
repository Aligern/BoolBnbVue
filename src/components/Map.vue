<template>
  <div>

    <div ref="mapRef" id="map"></div>
  </div>
</template>

<script>
  import { TOMTOM_API_KEY } from '@/script';
import { onMounted, reactive, ref } from 'vue'

  export default {
    name: 'Map',

    setup() {
      const mapRef = ref(null)
      const state = reactive({
        locations: [
          { lng: 15.29470985780, lat: 37.85263650717430 },

        ]
      })
      const insertLocs = (map) => {
        const tomtom = window.tt;

        state.locations.forEach(function (location) {
          var marker = new tomtom.Marker().setLngLat(location).addTo(map)
          const popup = new tt.Popup({ anchor: 'top' }).setText('UBABank')
          marker.setPopup(popup).togglePopup()
        })
      }

      onMounted(() => {
        const tt = window.tt;
        const focus = { lat: 37.31052000000000, lng: 13.64791000000000 }

        var map = tt.map({
          key: TOMTOM_API_KEY,
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