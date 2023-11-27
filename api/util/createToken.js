const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();
const { TOKEN_KEY } = process.env;

const createToken = async (
    tokenData,
    tokenKey = TOKEN_KEY,
    
) => {
    try {
        const token = await jwt.sign(tokenData,tokenKey);
        return token;
    } catch (err) {
        throw err;
    }
}

module.exports = {createToken};