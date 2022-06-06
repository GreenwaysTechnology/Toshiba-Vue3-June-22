<!-- <script>
export default {
    props: ['message'],
    setup(props) {
        //access props inside setup 
        console.log(props.message)

        return {
            props
        }
    }

} -->
<!-- </script>
<template>
    <h2>Child</h2>
    <h3>{{ props.message }} From the Parent Component </h3>
</template>  -->
<script setup>
const props = defineProps(['message'])
</script>
<template>
    <h2>Child</h2>
    <h3>{{ props.message }} From the Parent Component </h3>
    <h2>Dynamic Prop Child</h2>
</template>