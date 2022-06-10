<script setup>
import { ref } from 'vue';
const name = ref("defaultName")
const mail = ref('')
const checked = ref(true)

</script>
<template>
    <div>
        <h2>{{ name }}</h2>
        <label id="name">Name</label>
        <input v-model="name" />
    </div>
    <div>
        <h2>{{ mail }}</h2>
        <label id="mail">Mail</label>
        <textarea v-model="mail" />
    </div>
    <div>
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{checked}}</label>
    </div>
</template>