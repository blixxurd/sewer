var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({app: 'Sewage 1.0' });
});

module.exports = router;
