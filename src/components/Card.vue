<template>
  <div class="card" :class="typesPokemon[0]" v-if="opt.all || opt.enable == typesPokemon[0]">
    <img class="card__img" :src="pokemon.sprites.front_default" :alt="pokemon.name">
		<h2 class="card__name">{{ pokemon.name }}</h2>
		<p class="card__types">{{ typesPokemon.join(" | ") }}</p>
  </div>
</template>

<script>
export default {
  props: ['pokemon', 'opt'],
	computed: {
		typesPokemon(){
			const { types } = this.pokemon;
			return types.map(item => item.type.name)
		}
	},
	mounted(){
		this.typesPokemon;
	}
};
</script>

<style>
.card {
  border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.card__img {
  width: 50%;
  height: 50%;
	border-radius: 48%;
  background-color: #fff;
}

.card__name,
.card__types {
	margin-top: 10px;
}

.steel {
	background-color: #f4f4f4;
}

.fire {
	background-color: #ff7f50;
}

.grass {
	background-color: #00FF7F;
}

.electric {
	background-color: #ffe449;
}

.ice {
	background-color: #def3fd;
}

.water {
	background-color: #97b3e6;
}

.ground {
	background-color: #d2b48c;
}

.rock {
	background-color: #d5d5d4;
}

.fairy {
	background-color: #d8bfd8;
}

.poison {
	background-color: #a47548;
}

.bug {
	background-color: #f6dbac;
}

.dark {
	background-color: #665;
}

.dragon {
	background-color: #f4a460;
}

.psychic {
	background-color: #9400d3;
}

.flying {
	background-color: #afeeee;
}

.ghost {
	background-color: #d268ed;
}

.fighting {
	background-color: #cd5c5c;
}

.normal {
	background-color: #f5f5f5;
}
</style>