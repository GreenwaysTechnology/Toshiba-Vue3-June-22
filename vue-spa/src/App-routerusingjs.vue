<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Home from './components/Home.vue'
import { ref, computed } from 'vue'
//route config
const routes = {
  '/': Home,
  '/hello': HelloWorld
}
//Access path
const currentPath = ref(window.location.hash)

//track path changes
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
//current view
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})

</script>
<template>
  <!-- Navigation links -->
  <div>
    <ul>
      <li>
        <a href="#/">Home</a>
      </li>
      <li>
        <a href="#/hello">Hello</a>
      </li>
    </ul>
    <component :is="currentView" />
  </div>
</template>