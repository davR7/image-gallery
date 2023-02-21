<template>
  <div v-if="opt.all || opt.enable == image.category" 
    class="img-box" :class="image.category">
    <img :src="require(`@/assets/${image.image}`)" alt="">
  </div>
</template>

<script>
export default {
  props: ['image', 'opt']
};
</script>

<style>
/* .img-box img {
  background-color: #AFE669;
  padding: 4px;
  margin-bottom: 30px;
} */
</style>