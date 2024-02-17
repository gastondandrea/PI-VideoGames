const getGenresControllerAPI = require('../../controllers/genres/getGenresControllerAPI');
const getGenresControllerBD = require('../../controllers/genres/getGenresControllerBD');

// Devuelve todos los tipos de pokemones
const getGenresHandler = async (req, res) => {
    try {
        // Obtener datos de la API
        const allGenreVideogamesAPI = await getGenresControllerAPI();
        // Enviar datos de la API a la BD
        const allGenreVideogamesBD = await getGenresControllerBD(allGenreVideogamesAPI);
        res.status(200).json(allGenreVideogamesAPI);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getGenresHandler;