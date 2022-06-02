<script setup>
const firstName = "Subramanian"
</script>
<template>
    <div>
        <h1>Inter polation using mustache Notation</h1>
        <h2>First Name {{ firstName }}</h2>
        <h1>Inter polation using directive - innerHTML</h1>
        <h2 v-html="` First Name ${firstName}`"></h2>
        <h1>Inter polation using directive - innerText</h1>
        <h2 v-text="` First Name ${firstName}`"></h2>
    </div>
</template>