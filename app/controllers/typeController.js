const dataMapper = require('../dataMapper.js');

const typeController = {
    types : async function(req,res) {
        try {
            const pokemonTypes = await dataMapper.getTypes();
           // console.log(pokemonTypes)
            res.render('types', { pokemonTypes })
        } catch (error) {
            console.log(error)
            res.status(500).render('Error on types')
        }
    },
}

module.exports = typeController;