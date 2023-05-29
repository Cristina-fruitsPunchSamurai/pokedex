const database = require('./database');

const dataMapper = {
    getAllPokemon: async () => {
        const query = {
            text : 'SELECT * FROM pokemon'
        };
        const result = await database.query(query)
        return result.rows;
    },

    getPokemonDetail : async (pokemonId) => {
        const query = {
            text: 'SELECT pokemon.*, type.name FROM pokemon JOIN pokemon_type ON pokemon.numero = pokemon_type.pokemon_numero JOIN type ON type.id = pokemon_type.type_id where pokemon.id = $1',
            values : [pokemonId]
        };
        const result = await database.query(query)
        return result.rows;
    },

    getTypes : async () => {
        const query = {
            text: 'SELECT * from type',
        };
        const result = await database.query(query)
        return result.rows;
    }
}

module.exports = dataMapper;