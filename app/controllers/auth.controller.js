const DataController = require('../controllers/data.controller');

/**
 * Boilerplate controller for authentication. 
 * @param {Object} conf - Configuration object
 */
const AuthController = (config) => {

    const hasValidAuthKey = (req) => {
        return (req.headers.key && (req.headers.key == config.key));
    }

    return {
        hasValidAuthKey
    }

}

module.exports = AuthController;