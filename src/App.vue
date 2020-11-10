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
  background: #000046;
  background: -webkit-linear-gradient(to right, #1CB5E0, #000046);
  background: linear-gradient(to right, #1CB5E0, #000046);
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
