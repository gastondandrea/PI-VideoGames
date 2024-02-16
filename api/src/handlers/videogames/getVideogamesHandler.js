const getVideogameByNameController = require('../../controllers/videogames/getVideogameByNameController');
const getVideogamesController = require('../../controllers/videogames/getVideogamesController');

// Devuelve todos los videogames o el videogame por nombre
const getVideogamesHandler = async (req, res) => {
    const {name} = req.query;
    try {
        if(name){
            const videogamesByName = await getVideogameByNameController(name);
            res.status(200).json(videogamesByName);
        }else{
            const allVideogames = await getVideogamesController();
            res.status(200).json(allVideogames);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


module.exports = getVideogamesHandler;