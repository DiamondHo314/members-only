const express = require('express');
const indexRouter = express.Router();
const indexController = require('../controllers/indexController');

indexRouter.get('/', (indexController.getHome));
indexRouter.post("/log-in", (indexController.logIn));
indexRouter.get("/log-out", (indexController.logOut));

module.exports = indexRouter;