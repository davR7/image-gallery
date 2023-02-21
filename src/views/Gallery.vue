<template>
  <div class="gallery">
    <Menu @selectedCategory="filterGallery($event)" />
    <transition-group class="gallery__images" tag="div" appear
      enter-active-class="animate__animated animate__zoomIn"
      >
      <ImgBox v-for="image in imgData" :key="image.id" 
        :image="image" :opt="opt" />
    </transition-group>
  </div>
</template>

<script>
import axios from 'axios';
import Menu from '../components/Menu.vue'
import ImgBox from "../components/ImgBox.vue";
import imgData from "@/img-data.js";

export default {
  components: { Menu, ImgBox },
  data() {
    return {
      imgData,
      pokemons: [],
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
        .then((res) => /* this.pokemons = res */ console.log(res))
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
.gallery__images {
  display: grid;
  grid-template-columns: 
    repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  gap: 20px;
}
</style>