const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();

  createPokemonCard(data);

  if (id == 1) {
    console.log();
    console.log(data);
  }
};

const createPokemonCard = (pokemon) => { 
 
  let name = pokemon["forms"][0]["name"]
  let type = pokemon["types"][0]["type"]["name"];
  console.log(name,type,colors[type])
  poke_container.innerHTML += `<div class="pokemon" style="background-color:${colors[type]}"> 
    <div class="img-container"> 
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="">
    </div>
    <div class="info"> 
      <span class="number">${generateId(pokemon.id)}</span> 
      <h3 class="name">${name}</h3> 
      <small class="type">Type: <span>${
        type
      }</span></small>
    </div>
  </div>`;
};

function generateId(id) {
  let str = "";
  if (id < 10) {
    str = str.concat("#00");
  } else if (id < 100) {
    str = str.concat("#0");
  } else {
    str = str.concat("#");
  }

  str = str.concat(id);
  console.log(str);
  return str;
}

fetchPokemons();
