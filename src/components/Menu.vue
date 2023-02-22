<template>
  <div class="menu">
    <select
      class="menu__select"
      v-model="selected" 
      @change="categoryName(selected.class)"
    >
      <option 
        class="select__opt" 
        v-for="item in typesPokemons"
        :key="item.id" 
        :value="item"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
import typesPokemons from '../typePokemons';

export default {
  data() {
    return {
      typesPokemons,
      selected: 16
    }
  },
  methods: {
    categoryName(name) {
      this.$emit('selectedCategory', name)
    }
  },
  created() {
    this.selected = this.typesPokemons.find(item => item.id === this.selected);
  }
};
</script>

<style>
.menu {
  width: 300px;
}

.menu__select {
  width: 100%;
  padding: 10px;
  margin-bottom: 30px;
  background-color: #1E90FF;
}
</style>