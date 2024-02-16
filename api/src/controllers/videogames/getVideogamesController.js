const {Videogame, Genre} = require('../../db');
const axios = require('axios');
const {API_KEY} = process.env;

const getVideogamesController = async () => {
    // Obtiene todos los videogames de la API
    const infoApi = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`)).data;
    const {results} = infoApi;
    const allVideogamesAPI = await Promise.all(results.map( async (videogame)=>{
      const infoVideogameAPI = (await axios.get(`https://api.rawg.io/api/games/${videogame.id}?key=${API_KEY}`)).data;
      return {
        id: videogame.id,
        name: videogame.name,
        platforms: videogame.platforms.map((platform)=>platform.platform.name),
        description: infoVideogameAPI.description,
        image: videogame.background_image,
        released: videogame.released,
        rating: videogame.rating,
        genres: videogame.genres.map((obj)=>{
          return {
            id: obj.id,
            name: obj.name
          }
        })
      }
    }));
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
    const allVideogamesBDDFilter = allVideogamesBDD.map((obj)=>{
      return {
        id: obj.id,
        name: obj.name,
        description: obj.description,
        platforms: obj.platforms,
        image: obj.image,
        release_date: obj.release_date,
        rating: obj.rating,
        genres: obj.genres.map((obj)=>obj.name)
      }
    })


    const allVideogames = [...allVideogamesBDDFilter, ...allVideogamesAPI];

    return allVideogames;
};

module.exports = getVideogamesController; 