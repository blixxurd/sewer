const Sewage = require('../models/data.model');

const DataController = () => {

    create = (req, res, next) => {
        res.json({action: 'create'});
    }

    find = (req, res, next) => {
        res.json({action: 'find'});
    }

    findAll = (req, res, next) => {
        res.json({action: 'findAll'});
    }

    update = (req, res, next) => {
        res.json({action: 'update'});
    }

    destroy = (req, res, next) => {
        res.json({action: 'destroy'});
    }

    return {
        create: create,
        find: find,
        findAll: findAll,
        update: update,
        destroy: destroy
    }

};

module.exports = DataController();
