<script setup>
//variables
const firstName = 'Subramanian'
</script>
<template>
    <div>
        <h1>Directives</h1>
        <h2>{{firstName}}</h2>
        <h2 v-html="firstName"></h2>
    </div>
</template>