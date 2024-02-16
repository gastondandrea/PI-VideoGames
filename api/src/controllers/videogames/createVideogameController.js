const {Videogame, Genre} = require('../../db');

const createVideogameController = async ({name, image, description, platforms, release_date, rating, genres}) => {
    const newVideogame = await Videogame.create({
            name,
            image,
            description,
            platforms,
            release_date,
            rating
    });

    await newVideogame.addGenres(genres);

    return newVideogame;
    }

module.exports = createVideogameController;