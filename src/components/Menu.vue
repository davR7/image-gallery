<template>
  <div class="menu">
    <button v-for="(categ, index) in categs" :key="index" 
      class="btn m-1" @click="categoryName(`${categ.class}`)"
    >{{ categ.name }}</button>
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
.menu {
  margin-bottom: 20px;
}

.menu .btn {
  background-color: #4169E1;
  color: #fff;
  padding: 10px 15px;
  margin-right: 5px;
  border-radius: 10px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.6);
  border: 1px solid #FFF;
}
</style>