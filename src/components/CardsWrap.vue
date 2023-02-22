<template>
  <div class="cards-wrap">
    <Menu @selectedCategory="filterGallery($event)" />
    <Loading v-if="loadingPokemons"/>
    <transition-group v-else class="cards-wrap__images" tag="div" appear
      enter-active-class="animate__animated animate__zoomIn"
      >
      <Card v-for="{data: pokemon} in pokemons" :key="pokemon.id" 
        :pokemon="pokemon" :opt="opt" />
    </transition-group>
  </div>
</template>

<script>
import mixinPokemons from '../mixinPokemons';
import Card from "./Card.vue";
import Loading from './Loading.vue'
import Menu from './Menu.vue'

export default {
  components: { Card, Loading, Menu },
  mixins: [ mixinPokemons ],
  data() {
    return {
      opt: {
        all: true,
        enable: ""
      }
    };
  },
  methods: {
    filterGallery(category) {
      if (category == 'all') {
        this.opt.all = true;
      } else {
        this.opt.all = false;
        this.opt.enable = '';
        setTimeout(()=> {
          this.opt.enable = category
        }, 100)
      }
    },
  }
}
</script>

<style scoped>
.cards-wrap__images {
  display: grid;
  grid-template-columns: 
    repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  gap: 20px;
}
</style>