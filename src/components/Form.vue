<template>
    <div class="form">
        <input type="text"  placeholder="longitude" v-model="longitude">
        <input type="text"  placeholder="latitude" v-model="latitude">
        <button @click="sendLocation">Add Location</button>
    </div>
</template>
 
<script>
import { ref } from 'vue'
 
export default {
    name: 'Form',
    setup(props, context) {
        const latitude = ref('')
        const longitude = ref('')
 
        const sendLocation = () => {
            context.emit('useLocation', {lat: Number(latitude.value), lng: Number(longitude.value)})
        }
 
        return {
            longitude,
            latitude,
            sendLocation
        }       
    },
}
</script>