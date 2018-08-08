var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/create', function(req, res, next) {
    res.json({action: 'create'});
});
router.get('/read', function(req, res, next) {
    res.json({action: 'read'});
});
router.get('/update', function(req, res, next) {
    res.json({action: 'update'});
});
router.get('/destroy', function(req, res, next) {
    res.json({action: 'destroy'});
});

module.exports = router;
