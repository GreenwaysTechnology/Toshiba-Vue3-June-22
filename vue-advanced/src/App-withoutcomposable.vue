, onUnmountedonMounted, <script setup>
//Track mouse positions and display on the screen
import { ref, onMounted,onUnmounted } from 'vue';

//state
const x = ref(0)
const y = ref(0)

//logic to update
function update(event) {
    console.log('moving....')
    x.value = event.pageX
    y.value = event.pageY
}
//Life cycles to register dom events
onMounted(() => {
    //register mouse listener
    window.addEventListener('mousemove', update)
})
onUnmounted(()=>{
     //register mouse listener
    window.removeEventListener('mousemove', update)
})
</script>
<template>
    <h1>Mouse Position x: {{ x }} y: {{ y }}</h1>
</template>