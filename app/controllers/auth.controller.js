const DataController = require('../controllers/data.controller');

/**
 * Boilerplate controller for authentication. 
 * In the future, this will be built out to actually handle real user credentials.
 * For now, it uses a static key.
 * @param {Object} conf - Configuration object
 */
const AuthController = (config) => {

    const hasValidAuthKey = (req) => {
        return (req.headers.api_key && (req.headers.api_key == config.key));
    }

    return {
        hasValidAuthKey
    }

}

module.exports = AuthController;