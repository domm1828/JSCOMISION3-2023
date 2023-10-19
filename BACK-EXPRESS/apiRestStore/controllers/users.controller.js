const db = require("../models");


const getUserAll = async (req, res) => {
    const user = await db.user.findAll();
    res.status(200).json({ 'error': false, data: user });
};

const createUser = async (req, res) => {
    try {
        const user = await db.user.create(req.body);
        res.status(200).json({ 'error': false, data: user });
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ 'error': true, message: e });
    }
};

const updateUser = (req, res) => {
    res.json({ message: 'user PUT' });
};

const deleteUser = async(req, res) => {

    try {
        let id = req.params.id
        await db.user.findAll({where:{id:id}}).then(async (result)=>{
            if(result.length > 0 ){
                await db.user.destroy({where:{id:id}});
                res.status(200).json({ 'error': false, data: null, message:'User Delete' });
            }
            else{
                res.status(404).json({ 'error': true, data: null, message:'Id user not found' });
            }
        })
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ 'error': true, message: e });
    }
};

const filterUser = (req, res) => {
    console.log(req.params);
    console.log(req.query)
    res.json({ message: 'ROUTER DYNAMIC', params: req.params, query: req.query });
}

module.exports = { getUserAll, createUser, updateUser, deleteUser, filterUser }