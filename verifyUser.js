const jwt = require('jsonwebtoken');

exports.verifyUser =  async (req,res,next) => {
    const token = req.headers.token;
    const decoded = jwt.verify(token, 'SECRET_KEY_RANDOM');
    req.userId = decoded.id;
    next();
};