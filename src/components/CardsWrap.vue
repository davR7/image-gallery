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
import axios from 'axios';
import Card from "./Card.vue";
import Loading from './Loading.vue'
import Menu from './Menu.vue'

export default {
  components: { Card, Loading, Menu },
  data() {
    return {
      pokemons: [],
      loadingPokemons: true,
      opt: {
        all: true,
        enable: ""
      }
    };
  },
  methods: {
    async fetchPokemon(id){
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
      } catch (e) {
        return e;
      }
    },
    generatePokemonsPromises(amount){
      return Array(amount).fill().map((_, index) => {
        return this.fetchPokemon(index + 1);
      })
    },
    generatePokemons(){
      Promise.all(this.generatePokemonsPromises(150))
        .then((res) => this.pokemons = res)
        .finally(() => this.loadingPokemons = false)
    },
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
  },
  created() {
    this.generatePokemons()
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