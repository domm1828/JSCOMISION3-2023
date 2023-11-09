const Bcrypt = require("bcrypt");
const User = require("../../models/mongo/user");



const getUserAll = async (req, res) => {
    try {

        let user = await User.find();
        res.status(200).json({ 'error': false, data: user });

    }
    catch (e) {
        res.status(400).json({ 'error': true, message: e });
    }
};

const createUser = async (req, res) => {
    try {
        let body = req.body;
        body.password = Bcrypt.hashSync(body.password, 10);

        let user = new User(body);
        user.save();
        res.status(200).json({ 'error': false, data: user });
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ 'error': true, message: e });
    }
};

const updateUser = async (req, res) => {

    try {
        let id = req.params.id;
        let user = await User.findById(id);
        if (user) {
            let body = req.body;
            if (body.password) {
                body.password = Bcrypt.hashSync(body.password, 10);
            }
            await User.updateOne({ _id: id }, body);
            res.status(200).json({ 'error': false, data: null, message: 'User Data' });
        }
        else {
            res.status(404).json({ 'error': true, data: null, message: 'Id user not found' });
        }
    }
    catch (e) {
        res.status(400).json({ 'error': true, message: e });
    }

};

const deleteUser = async (req, res) => {

    try {
        let id = req.params.id;
        let user = await User.findById(id);
        if (user) {
            await User.findByIdAndDelete(id);
            res.status(200).json({ 'error': false, data: null, message: 'User Data' });
        }
        else {
            res.status(404).json({ 'error': true, data: null, message: 'Id user not found' });
        }

    }
    catch (e) {
        console.log(e);
        res.status(400).json({ 'error': true, message: e });
    }
};


const getById = async (req, res) => {
    try {
        let id = req.params.id
        let user = await User.findById(id);
        if (user) {
            res.status(200).json({ 'error': false, data: user, message: 'User Data' });
        }
        else {
            res.status(404).json({ 'error': true, data: null, message: 'Id user not found' });
        }
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ 'error': true, message: e });
    }

}


module.exports = { getUserAll, createUser, updateUser, deleteUser, getById }