const {Videogame, Genre} = require('../../db');

const getVideogameByIdControllerDB = async (id) => {
const infoApiBDD = await Videogame.findOne({ // Buscamos el Videogame en la BDD
    where: { id: id },
    include: // y le incluye su type
    {
        model: Genre,
        attributes: ["id", "name"],
        through: { attributes: [] }
    }
});

return infoApiBDD;
}

module.exports = getVideogameByIdControllerDB;