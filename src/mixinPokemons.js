import axios from 'axios';

export default {
  data() {
    return {
      pokemons: [],
      loadingPokemons: true
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
  },
  created() {
    this.generatePokemons()
  }
}