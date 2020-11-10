<template>
  <div class="menu">
    <b-button v-for="(categ, index) in categs" :key="index" 
      class="btn m-1" @click="categoryName(`${categ.class}`)"
    >{{ categ.name }}</b-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      categs: [
        { name: 'SmartTV', class: 'smart-tv' },
        { name: 'Notebook', class: 'notebook' },
        { name: 'SmartFone', class: 'mobile' },
        { name: 'Fone de Ouvido', class: 'headphone' },
        { name: 'Todas Imagens', class: 'all' },
      ]
    }
  },
  methods: {
    categoryName(name){
      this.$emit('selectedCategory', name)
    }
  }
};
</script>

<style>
</style>