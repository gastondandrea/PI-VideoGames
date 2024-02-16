const {Videogame, Genre} = require('../../db');
const axios = require('axios');
const { Sequelize } = require('sequelize');
const {API_KEY} = process.env;

const getVideogameByNameController = async (name) => {

    //Obtiene el videogame de la BDD por nombre
    const videogameByNameDB = await Videogame.findAll({
      include: {
          model: Genre,
          attributes: ["name"],
          through: { attributes: [] }
      }
    });

    const videogameByNameDBFilter =  videogameByNameDB.filter((videogame)=>videogame.name.toLowerCase().includes(name.toLowerCase()));


    //Obtiene el videogame de la API por nombre
    const videogameByNameApi = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)).data;
    const {results} = videogameByNameApi;
    //Filtrado de datos
    const videogameByNameApiFiltrado = results.map((videogame)=>{
      return {
        id: videogame.id,
        name: videogame.name,
        description: videogame.description,
        platforms: videogame.platforms.map((platform)=>platform.platform.name),
        image: videogame.image,
        release_date: videogame.release_date,
        rating: videogame.rating,
        genres: videogame.genres.map((obj)=>{
          return {
            id: obj.id,
            name: obj.name
          }
        })
      };
    })
    const videogameByNameApiDB = [...videogameByNameDBFilter , ...videogameByNameApiFiltrado]

    if(videogameByNameApiDB.length === 0){
      throw new Error("No se encontraron videojuegos");
    } else{
      const videogameByNameApiFiltrado15 = videogameByNameApiDB.slice(0, 15);;
      return videogameByNameApiFiltrado15;
    }
};


module.exports = getVideogameByNameController;