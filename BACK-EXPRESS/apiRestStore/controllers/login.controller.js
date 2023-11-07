const db = require("../models");
const Bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = db.user;

const login = async (req, res) => {

    try {

        User.findOne({ where: { email: req.body.email } }).then((user) => {
            if (!user) {
                return res.status(401).json({ 'error': true, message: 'user and password not working' });
            }
            let veryPassword = Bcrypt.compareSync(req.body.password, user.password);

            if (!veryPassword) {
                return res.status(401).json({ 'error': true, message: 'password and user not working' });
            }

            let token = jwt.sign({ id: user.id }, 'ABCDEFGHIJKLMNOPQRSTUVWXZY', { expiresIn: 60 });
            let data = {token,user}
            res.status(200).json({ 'error': false, data: data });
        })

    }

    catch (e) {
        res.status(400).json({ 'error': true, message: e });
    }

}

module.exports = login