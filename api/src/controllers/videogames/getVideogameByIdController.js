const {Videogame, Genre} = require('../../db');
const axios = require('axios');
const {API_KEY} = process.env;

const getVideogameByIdController = async (id, source) => {
    if(source === "api"){
        const infoApiDetail = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data;
        const infoApiDetailFiltrado = {
            id: infoApiDetail.id,
            name: infoApiDetail.name,
            description: infoApiDetail.description,
            platforms: infoApiDetail.platforms.map((platform)=>platform.platform.name),
            image: infoApiDetail.background_image,
            released: infoApiDetail.released,
            rating: infoApiDetail.rating,
            genres: infoApiDetail.genres.map((genre)=>{
                return {
                    id: genre.id,
                    name: genre.name
                }
            }),
          };
        return infoApiDetailFiltrado;
    }else{
        const infoApiBDD = await Videogame.findOne({ // Buscamos el Videogame en la BDD
                        where: { id: id },
                        include: // y le incluye su type
                        {
                            model: Genre,
                            attributes: ["name"],
                            through: { attributes: [] }
                        }
                    });

        // const {types} = infoApiBDD;
        // const types_2 = types.map((obj)=>{
        //     return obj.name;
        // })
                    
        // return types_2;

        return infoApiBDD;
    }
}


module.exports = getVideogameByIdController;