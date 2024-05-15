const jwt = require('jsonwebtoken');

const createToken = (user) => {
    return jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
}

const verifyToken = (token) => {
    if (!token) return false;

    try {
        jwt.verify(token, process.env.TOKEN_SECRET);
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = { createToken, verifyToken }