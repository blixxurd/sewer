const DataController = require('../controllers/data.controller');
const AuthController = require('../controllers/auth.controller');
const createError = require('http-errors');

const CrudRouter = (mongoose, config) => {
    
    const express = require('express');
    const router = express.Router();
    const Auth = AuthController(config);
    
    router.all('/*', (req,res, next) => {
        if(req.method == 'GET' || Auth.hasValidAuthKey(req)) { 
            next(); 
        } else {
            next(createError(401));
        }
    });

    router.post('/:set', DataController.create);
    router.get('/:set', DataController.findAll);
    router.put('/:set/:id', DataController.update);
    router.delete('/:set/:id', DataController.destroy);

    return router;
}

module.exports = CrudRouter;
