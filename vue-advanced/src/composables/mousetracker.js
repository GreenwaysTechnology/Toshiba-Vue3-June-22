import { ref, onMounted, onUnmounted } from 'vue'

//all composable function starts with "use" convention only/ not synatx
export function useMouseTracker() {
    //state
    const x = ref(0)
    const y = ref(0)
    //logic
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
    onUnmounted(() => {
        //register mouse listener
        window.removeEventListener('mousemove', update)
    })
    //return state as object and even logic : you can return any thing but should be encapsulated inside object
    return {
        x,
        y
    }

}