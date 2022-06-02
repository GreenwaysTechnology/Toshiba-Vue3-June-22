<script setup>
import { ref } from 'vue';

//reactive states
const like = ref(0)
const dislike = ref(0)

//two listeners
const onLike = () => like.value++
const onDislike = () => dislike.value++

</script>
<template>
    <div>
        <h1>Like and DisLike Application</h1>
        <h1>Likes {{ like }} DisLike {{ dislike }}</h1>
        <button @click="onLike">Like</button>
        <button @click="onDislike">Dislike</button>
    </div>
</template>
<style>
</style>