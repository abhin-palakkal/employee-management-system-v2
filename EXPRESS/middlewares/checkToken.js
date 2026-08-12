//import
const jwt = require('jsonwebtoken');

const checkToken = role => {
  return (req, res, next) => {
    try {
      const bearerToken = req.headers.authorization;
      if (!bearerToken) {
        return res.status(401).json({ message: 'you are not authorized' });
      }
      const token = bearerToken.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.KEY);
      if (!decodedToken) {
        return res.status(401).json({ message: 'you are not authorized' });
      }
      if (decodedToken.role !== role) {
        return res.status(403).json({ message: 'you are not authorized' });
      }
    } catch (error) {
      return res.status(401).json({ message: 'you are not authorized' });
    }

    next();
  };
};

module.exports = checkToken;
