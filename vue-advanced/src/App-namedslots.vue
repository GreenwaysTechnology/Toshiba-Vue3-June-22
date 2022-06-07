<script setup>
import { ref } from 'vue';
import Layout from './slots/Layout.vue';

const header = ref('header')

</script>
<template>
    <h1>Vue Application</h1>
    <hr />
    <!-- <Layout>
        <template v-slot:header>
            <h1>Header</h1>
        </template>
        <template v-slot:main>
            <p>This is body</p>
        </template>
        <template v-slot:footer>
            <h1>Footer</h1>
        </template>
    </Layout> -->
    <!-- Slot short cut -->
    <Layout>
        <!-- <template v-slot:[header]>
            <h1>Header</h1>
        </template> -->
        <template #[header]>
            <h1>Header</h1>
        </template>
        <template #default>
            <p>This is body</p>
        </template>
        <template #footer>
            <h1>Footer</h1>
        </template>
    </Layout>
</template>