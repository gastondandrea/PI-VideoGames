const {Videogame, Genre} = require('../../db');

const getVideogamesControllerDB = async () => {
    //Obtiene todos los videogames de la BDD
    const allVideogamesBDD = await Videogame.findAll(
        {
          include: [ // y le incluye su Genre
          {
              model: Genre,
              attributes: ["name"],
              through: { attributes: [] }
          }]
        }
      );
      
      return allVideogamesBDD;
}

module.exports = getVideogamesControllerDB;