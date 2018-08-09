const DataController = require('../controllers/data.controller');

const CrudRouter = (mongoose, config) => {
    
    const express = require('express');
    const router = express.Router();

    router.post('/:set', DataController.create);
    router.get('/:set', DataController.findAll);
    router.get('/:set/:id', DataController.find);
    router.put('/:set', DataController.update);
    router.delete('/:set', DataController.destroy);

    return router;
}

module.exports = CrudRouter;
