const db = require("../models");
const Address = db.addressUser;

const getAll = async (req, resp) => {
    try {
        let address = await Address.findAll({ include:["userAddress"]});
        resp.status(200).json({ 'error': false, data: address });
    }
    catch (e) {
        resp.status(400).json({ 'error': true, message: e });
    }

}

const createAddress = async (req, resp) => {
    try {

        let address = await Address.create(req.body);
        resp.status(200).json({ 'error': false, data: address });

    }
    catch (e) {
        resp.status(400).json({ 'error': true, message: e });
    }
}

const updateAddress = async (req, resp) => {

    try {
        let id = req.params.id;
        let address = await Address.findByPk(id);
        if (address) {

            await Address.update(req.body, { where: { id: id } });
            resp.status(200).json({ 'error': false, data: null, message: 'Direccion Modificada' });
        }
        else {
            resp.status(404).json({ 'error': true, message: 'Error el Id de Direccion no existe' });
        }
    }
    catch (e) {
        resp.status(400).json({ 'error': true, message: e });
    }

}

const deleteAddress = async (req, resp) => {

    try {
        let id = req.params.id;

        let address = await Address.findByPk(id);
        if (address) {

            await Address.destroy({ where: { id: id } });
            resp.status(200).json({ 'error': false, data: null, message: 'Direccion Eliminada' });
        }
        else {
            resp.status(404).json({ 'error': true, message: 'Error el Id de Direccion no existe' });
        }


    }
    catch (e) {
        resp.status(400).json({ 'error': true, message: e });
    }


}


module.exports = { getAll, createAddress, updateAddress, deleteAddress }