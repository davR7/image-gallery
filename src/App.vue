<template>
  <div id="app">
    <ViewGallery />
  </div>
</template>

<script>
import ViewGallery from './views/ViewGallery.vue';

export default {
    name: "App",
    components: { ViewGallery }
}
</script>

<style>
/* ============ RESET ==============*/
* {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  font-size: 100%;
}

img {
  width: 100%;
}

/* ============= DEFAULT CSS ================== */
body {
  background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0 20px;
}

.app-title {
  color: #fff;
  font-size: 2rem;
  margin: 30px;
  text-align: center;
}</style>
