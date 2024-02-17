const { Genre } = require('../../db');

const getGenresControllerBD = async (allGenreVideogames) => {
    // Inserta todos los genres en la BDD si no existen
    for (const genre of allGenreVideogames) {
        await Genre.findOrCreate({ where: { name: genre.name} });
    }
}

module.exports = getGenresControllerBD;