const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const { TOKEN_KEY } = process.env;

const verifyToken = async (req, res, next) => {
    const token = req.body.access_token || req.query.access_token || req.headers['x-access-token'];
    if (!token) {
      return res.status(403).send('An authentication token is required');
    }
  
    try {
      const decodedToken = await jwt.verify(token, TOKEN_KEY);
      req.currentUser = decodedToken;
      next(); // Middleware'i kullandığınız yerdeki bir sonraki işleme geç
    } catch (error) {
      return res.status(401).send('Invalid Token provided');
    }
  };
  
  module.exports = verifyToken;