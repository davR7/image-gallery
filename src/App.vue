<template>
  <div id="app">
    <Gallery />
  </div>
</template>

<script>
import Gallery from './components/views/Gallery.vue'

export default {
  name: 'App',
  components: { Gallery }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
