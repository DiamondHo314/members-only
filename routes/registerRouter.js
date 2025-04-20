const express = require('express');
const registerRouter = express.Router();
const registerController = require('../controllers/registerController');

registerRouter.get('/', (req, res) => {
    res.render('register_user')
});

registerRouter.post('/', registerController.registerUser);

module.exports = registerRouter;

