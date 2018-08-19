const Sewage = require('../models/data.model');

const DataController = () => {

    create = (req, res, next) => {
        let data = req.body;
        let set = req.params.set;
        console.log(`Adding to set: ${set}`);
        // sewage.create
        Sewage.create({data_set: set, data: data}).then(
            (result) => {
                res.json({success: true, result});
            },
            (error) => {
                console.log(error);
                res.json({success: false, error: error.message});
            }
        );
    }

    find = (req, res, next) => {
        let data = req.query;
        let set = req.params.set;
        // console.log(`Finding from set: ${set}`);
        // console.log(data);
        // sewage.where
        //Sewage.create()
        res.json({action: 'find'});
    }

    findAll = (req, res, next) => {
        let set = req.params.set;
        // console.log(`Getting all from set: ${set}`);
        // sewage.where
        res.json({action: 'findAll', set});
    }

    update = (req, res, next) => {
        let set = req.params.set;
        let data = req.body;
        // console.log(`Updating set: ${set}`);
        // console.log(data);
        // sewage.update
        res.json({action: 'update'});
    }

    destroy = (req, res, next) => {
        let set = req.params.set;
        let data = req.body;
        // console.log(`Deleting one from set: ${set}`);
        // console.log(data);
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
