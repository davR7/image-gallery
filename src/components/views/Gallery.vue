<template>
  <div class="gallery">
    <b-container>
      <h2>Galeria de Imagem</h2>
      <hr>
      <div class="menu">
        <b-button class="btn m-1">Todas Imagens</b-button>
        <b-button class="btn m-1">Camera</b-button>
        <b-button class="btn m-1">Fone de Ouvido</b-button>
        <b-button class="btn m-1">SmartFone</b-button>
        <b-button class="btn m-1">Tênis</b-button>
        <b-button class="btn m-1">Relogio</b-button>
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
import ImgBox from '../widgets/ImgBox.vue'
import imgData from '@/img-data.js'

export default {
  data(){
    return {
      imgData: imgData
    }
  },
  components: { ImgBox }
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