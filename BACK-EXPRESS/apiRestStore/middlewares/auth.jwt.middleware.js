const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.user;

const veryToken = (req, res, next) => {

    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).json({ 'error': true, message: 'ERROR TOKEN' });
    }

    jwt.verify(token, 'ABCDEFGHIJKLMNOPQRSTUVWXZY', async (error, decode) => {

        if (error) {
            return res.status(403).json({ 'error': true, message: 'ERROR TOKEN' });
        }

        let user = await User.findByPk(decode.id);
        if(user){

            if(user.type_user != 1 ){
                return res.status(403).json({ 'error': true, message: 'ERROR NOT ACCESS' }); 
            }

            req.UserId = decode.id
            next()
        }


    });


}
module.exports = veryToken;