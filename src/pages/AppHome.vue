<template>

    <div>
        <CardComponent />
    </div>

</template>

<script>
import axios from 'axios';
import { store } from '../store';
import CardComponent from '@/components/CardComponent.vue';
    export default {
        name: 'AppHome',
        components: { 
            CardComponent,
            },
            data() {
                return {
                    store
                }
            },
    }
</script>

<style lang="scss" scoped>

</style>