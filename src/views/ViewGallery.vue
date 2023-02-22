<template>
  <div class="view-gallery">
    <h2 class="view-gallery__title">Os 150 Pokémons</h2>
    <CardsWrap />
  </div>
</template>

<script>
import CardsWrap from '../components/CardsWrap.vue';

export default {
    components: { CardsWrap, }
};
</script>

<style>
.view-gallery__title {
  font-size: 2rem;
  color: #fff;
  margin: 50px 0;
  text-align: center;
}
</style>