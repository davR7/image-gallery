<template>
  <div class="gallery">
    <b-container>
      <h2>Galeria de Imagem</h2>
      <hr />
      <Menu @selectedCategory="filterGallery($event)"/>
      <div class="images">
        <transition-group class="row" tag="div" appear
          enter-active-class="animate__animated animate__zoomIn"
        >
          <ImgBox v-for="image in imgData" :key="image.id" 
            :image="image" :opt="opt" />
        </transition-group>
      </div>
    </b-container>
  </div>
</template>

<script>
import Menu from '../widgets/Menu.vue'
import ImgBox from "../widgets/ImgBox.vue";
import imgData from "@/img-data.js";

export default {
  components: { Menu, ImgBox },
  data() {
    return {
      imgData,
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
.gallery h2 {
  font-size: 2.2rem;
  text-transform: uppercase;
  font-weight: 700;
  color: #FFF;
}

.images {
  margin-top: 30px;
}

.images .row {
  height: 100vh;
}
</style>