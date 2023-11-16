const Address = require("../../models/mongo/addressuser");

 

const getAll = async (req, resp) => {
    try {
        let address = await Address.find({}).populate('users_id');
        resp.status(200).json({ 'error': false, data: address });
    }
    catch (e) {
        resp.status(400).json({ 'error': true, message: e });
    }

}

const createAddress = async (req, resp) => {
    try {

        let address =  new Address(req.body);
        address.save(); 
        resp.status(200).json({ 'error': false, data: address });

    }
    catch (e) {
        resp.status(400).json({ 'error': true, message: e });
    }
}

const updateAddress = async (req, resp) => {

    resp.status(200).json({ 'error': false, data: null, message: 'Direccion Eliminada' });
}

const deleteAddress = async (req, resp) => {

    resp.status(200).json({ 'error': false, data: null, message: 'Direccion Eliminada' });


}


module.exports = { getAll, createAddress, updateAddress, deleteAddress }