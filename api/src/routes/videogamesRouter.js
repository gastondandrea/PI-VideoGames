const { Router } = require('express');
const videogamesRouter = Router();

// import hadlers
const getVideogamesHandler = require('../handlers/videogames/getVideogamesHandler');
const getVideogameByIdHandler = require('../handlers/videogames/getVideogameByIdHandler');
const createVideogameHandler = require('../handlers/videogames/createVideogameHandler');

// use handlers
videogamesRouter.get("/", getVideogamesHandler);
videogamesRouter.get("/:id", getVideogameByIdHandler);
videogamesRouter.post("/", createVideogameHandler);

module.exports = videogamesRouter;