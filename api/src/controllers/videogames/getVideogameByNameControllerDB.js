const {Videogame, Genre} = require('../../db');

const getVideogameByNameControllerDB = async (name) => {

    //Obtiene el videogame de la BDD por nombre
    const videogameByNameDB = await Videogame.findAll({
      include: {
          model: Genre,
          attributes: ["name"],
          through: { attributes: [] }
      }
    });

    const videogameByNameDBFilter =  videogameByNameDB.filter((videogame)=>videogame.name.toLowerCase().includes(name.toLowerCase()));

    return videogameByNameDBFilter;
}

module.exports = getVideogameByNameControllerDB;