const getGenresController = require('../../controllers/genres/getGenresController');


// Devuelve todos los tipos de pokemones
const getGenresHandler = async (req, res) => {
    try {
        const allGenreVideogames = await getGenresController();
        res.status(200).json(allGenreVideogames);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getGenresHandler;