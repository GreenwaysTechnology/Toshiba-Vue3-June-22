<script setup>
//high light directive
const vHightlight = {
    //define life cycle methods
    mounted: (element) => {
        //add event listener
        element.addEventListener('mousemove', (evt) => {
            //element.style.backgroundColor = 'yellow'
            highLight('yellow')
        })
        //remove style
        element.addEventListener('mouseleave', (evt) => {
            // element.style.backgroundColor = null
            highLight(null)
        })
        const highLight = (color) => {
            element.style.backgroundColor = color
        }
    }

}
</script>
<template>
    <h1 v-hightlight>HighLight</h1>

</template>