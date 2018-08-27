const Sewage = require('../models/data.model');

const DataController = () => {

    returnData = (res) =>  {
        return {
            success: (result) => {
                res.json({success: true, count: result.length, result: result});
            },
            success_results: (result) => {
                res.json({success: true, count: result.length, result: result.map((obj) => { return obj.data; })});
            },
            fail: (err) => {
                res.json({success: false, count: 0, error: err.message});
            }
        };
    }

    create = (req, res, next) => {
        let data = req.body;
        let set = req.params.set;
        console.log(`Adding to set: ${set}`);
        Sewage.create({data_set: set, data: data}).then(
            returnData(res).success,
            returnData(res).fail
        );
    }

    find = (req, res, next) => {
        let data = req.query;
        let set = req.params.set;
        console.log(`Finding from set: ${set}`);
        console.log(data);
        // sewage.where
        //Sewage.create()
        res.json({action: 'find'});
    }

    findAll = (req, res, next) => {
        let data = req.query;
        let set = req.params.set;
        let query = {data_set: set};
        console.log(`Getting all from set: ${set}`);
        Object.keys(data).map((value) => {
            let query_key = `data.${value}`;
            query[query_key] = data[value];
        });
        console.log(query);
        Sewage.where(query).select('data').then(
            returnData(res).success_results,
            returnData(res).fail
        ).catch(returnData(res).fail);
    }

    update = (req, res, next) => {
        let set = req.params.set;
        let id = req.params.id;
        let data = req.body;
        let query = {};
        Object.keys(data).map((value) => {
            let query_key = `data.${value}`;
            query[query_key] = data[value];
        });
        console.log(`Updating set: ${set}`);
        Sewage.findOneAndUpdate(id, query).then(
            returnData(res).success,
            returnData(res).fail
        ).catch(returnData(res).fail);
    }

    destroy = (req, res, next) => {
        let query = {data_set: req.params.set, _id: req.params.id};
        
        Sewage.findOneAndDelete(query).then(
            returnData(res).success,
            returnData(res).fail
        ).catch(returnData(res).fail);
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
