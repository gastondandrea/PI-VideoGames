const { Router } = require('express');
const genresRouter = Router();

// import hadlers
const getGenresHandler = require('../handlers/genres/getGenresHandler');

// use handlers
genresRouter.get("/", getGenresHandler);

module.exports = genresRouter;