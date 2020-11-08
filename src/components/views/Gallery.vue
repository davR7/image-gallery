<template>
  <div class="gallery">
    <b-container>
      <h2>Galeria de Imagem</h2>
      <hr />
      <div class="menu">
        <b-button class="btn m-1" @click="filterGallery('all')">Todas Imagens</b-button>
        <b-button class="btn m-1" @click="filterGallery('smart-tv')">Smart TV</b-button>
        <b-button class="btn m-1" @click="filterGallery('notebook')">Notebook</b-button>
        <b-button class="btn m-1" @click="filterGallery('mobile')">SmartFone</b-button>
        <b-button class="btn m-1" @click="filterGallery('headphone')">Fone de Ouvido</b-button>
        <b-button class="btn m-1" @click="filterGallery('watch')">Relógio</b-button>
      </div>
      <div class="images">
        <div class="row">
          <ImgBox v-for="image in imgData" :key="image.id" :image="image" />
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import ImgBox from "../widgets/ImgBox.vue";
import imgData from "@/img-data.js";
import $ from "jquery";

export default {
  components: { ImgBox },
  data() {
    return {
      imgData: imgData,
    };
  },
  methods: {
    filterGallery(category) {
      if (category == "all") {
        $(".img-box").show("1000")
      } else {
        $(".img-box").not("."+category).hide('1000')
        $(".img-box").filter("."+category).show('1000')
      }
    }
  }
}
</script>

<style scoped>
.gallery h2 {
  font-size: 2.2rem;
  text-transform: uppercase;
}

.images {
  margin-top: 30px;
}
</style>