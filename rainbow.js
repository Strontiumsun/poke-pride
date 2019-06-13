var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

function rainbowPokemon(color) {
    P.getPokemonColorByName(color)
        .then(function (response) {
            // console.log(response);
            var species = response.pokemon_species;
            // console.log(species)
            var random = Math.floor((Math.random() * species.length));
            console.log(random)
            var pokePick = species[random].name

            console.log(pokePick)

            P.getPokemonByName(pokePick)
                .then(function (response) {
                    console.log(response.sprites.front_default);
                })
                .catch(function (error) {
                    console.log('There was an ERROR: ', error);
                });

        })
        .catch(function (error) {
            console.log('There was an ERROR: ', error);
        });

}

rainbowPokemon("red");
rainbowPokemon("brown");
rainbowPokemon("yellow");
rainbowPokemon("green");
rainbowPokemon("blue");
rainbowPokemon("purple")

