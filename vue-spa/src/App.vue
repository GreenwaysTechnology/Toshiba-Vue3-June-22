<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div>
        <!-- Menu Bar -->
        <nav>
            <ul>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/hello">Hello</RouterLink>
                </li>
                <li>
                    <RouterLink to="/user/ram">User</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'product' }">Product</RouterLink>
                </li>
            </ul>
        </nav>
        <!-- Place Holder to display view based on route change -->
        <RouterView></RouterView>
    </div>
</template>