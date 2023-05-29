const dataMapper = require('../dataMapper.js');

const mainController = {
    homePage : async function (req,res) {
        try{
            const pokemons = await dataMapper.getAllPokemon();
            //console.log(pokemons)
            res.render('home',{pokemons})
        } catch(error){
            console.log(error)
            res.status(500).render('Error on homePage')
        }
    },

    pokemonDetail: async function (req, res) {
        const pokemonId = parseInt(req.params.id, 10)

        try {
            const pokemonStats = await dataMapper.getPokemonDetail(pokemonId)
            //console.log(pokemonStats)
            res.render('pokemon',{pokemonStats})

        } catch(error){
            console.log(error)
            console.status(500).render('Error on pokemonDetail')
        }
    }
}
module.exports = mainController;