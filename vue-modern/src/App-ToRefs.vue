<script setup>
import { reactive,toRefs } from 'vue';

const location = reactive({
    lat: 10.5,
    lng: 90.5
})

let { lat, lng } = toRefs(location)

// const { lat, lng } = reactive({
//     lat: 10.5,
//     lng: 90.5
// })

// const updateLocation = () => {
//     location.lat = 22
// }
const updateLocation = () => {
    lat.value = 22
}
</script>
<template>
    <div>
        <!-- <p>Lat {{ location.lat }}</p>
        <p>Lng {{ location.lng }}</p>  -->
        <p>Lat {{ lat }}</p>
        <p>Lng {{ lng }}</p>
        <button @click="updateLocation">Update Location</button>
    </div>
</template>
