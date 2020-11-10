<template>
  <div v-if="opt.all || opt.enable == image.category" 
    class="img-box col-xs-12 col-sm-6 col-lg-4" 
    :class="image.category"
  >
    <b-img :src="require(`@/assets/${image.image}`)" 
      alt="" fluid-grow></b-img>
  </div>
</template>

<script>
export default {
  props: ['image', 'opt']
};
</script>

<style>
.img-box img {
  background-color: #AFE669;
  padding: 4px;
  margin-bottom: 30px;
}
</style>