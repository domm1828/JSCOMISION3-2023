const db = require("../models");
const Bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const getUserAll = async (req, res) => {
    try {
        let optionsSql = [];
        let filter = { 
            attributes: {
                exclude: ['deletedAt', 'password']
            },
            include:["address"]
        }
        console.log(req.query)

        if (req.query.name) {
            optionsSql.push({
                name: {
                    [Op.like]: `%${req.query.name}%`
                }
            })
        }
        if(req.query.last_name){
            optionsSql.push({
                last_name: {
                    [Op.like]: `%${req.query.last_name}%`
                }
            });
        }
        if(optionsSql.length>0){
            filter = {
                where: {
                    [Op.or]: optionsSql
                },
                attributes: {
                    exclude: ['deletedAt', 'password']
                }
            } 
        }

        const user = await db.user.findAll(filter);
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
        const user = await db.user.create(body);
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
        await db.user.findAll({ where: { id: id } }).then(async (result) => {
            if (result.length > 0) {
                let body = req.body;
                if (body.password) {
                    body.password = Bcrypt.hashSync(body.password, 10);
                }
                await db.user.update(body, { where: { id: id } });
                res.status(200).json({ 'error': false, data: null, message: 'User Update' });
            }
            else {
                res.status(404).json({ 'error': true, data: null, message: 'Id user not found' });
            }
        });
    }
    catch (e) {
        res.status(400).json({ 'error': true, message: e });
    }

};

const deleteUser = async (req, res) => {

    try {
        let id = req.params.id
        await db.user.findAll({ where: { id: id } }).then(async (result) => {
            if (result.length > 0) {
                await db.user.destroy({ where: { id: id } });
                res.status(200).json({ 'error': false, data: null, message: 'User Delete' });
            }
            else {
                res.status(404).json({ 'error': true, data: null, message: 'Id user not found' });
            }
        })
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ 'error': true, message: e });
    }
};


const getById = async(req,res)=>{
    try{
        let id = req.params.id 
        let user =  await db.user.findByPk(id,{include:['address']});
        if(user){
            res.status(200).json({ 'error': false, data: user, message: 'User Data' });
        }
        else{
            res.status(404).json({ 'error': true, data: null, message: 'Id user not found' }); 
        }
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ 'error': true, message: e });
    }

}
 

module.exports = { getUserAll, createUser, updateUser, deleteUser,getById }