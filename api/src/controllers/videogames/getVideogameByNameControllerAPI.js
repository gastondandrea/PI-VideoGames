const {Videogame, Genre} = require('../../db');
const axios = require('axios');
const { Sequelize } = require('sequelize');
const {API_KEY} = process.env;

const getVideogameByNameControllerAPI = async (name) => {
    //Obtiene el videogame de la API por nombre
    const infoAPI = (await axios.get(`http://localhost:3001/videogames`)).data;
    // filtramos por nombre
    const videogameByNameApiFiltrado = infoAPI.filter((videogame) =>
      videogame.name.toLowerCase().startsWith(name.toLowerCase())
  );

    // //Filtrado de datos
    // const videogameByNameApiFiltrado = results.length !== 0 ? results.map((videogame)=>{
    //   return {
    //     id: videogame.id,
    //     name: videogame.name,
    //     description: videogame.description,
    //     platforms: videogame.platforms.map((platform)=>platform.platform.name),
    //     image: videogame.background_image,
    //     release_date: videogame.release_date,
    //     rating: videogame.rating,
    //     genres: videogame.genres.map((obj)=>{
    //       return {
    //         id: obj.id,
    //         name: obj.name
    //       }
    //     })
    //   };
    // }) : [];

    return videogameByNameApiFiltrado;
};


module.exports = getVideogameByNameControllerAPI;