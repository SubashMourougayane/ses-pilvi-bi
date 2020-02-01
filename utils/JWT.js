const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.generateToken = (data) => {

    return JWT.sign(data, process.env.PRIVATE_KEY);
}



module.exports.verifyToken = (token) => {
    var decoded = JWT.verify(token, process.env.PRIVATE_KEY);

    return decoded;
}