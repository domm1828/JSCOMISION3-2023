const db = require("../models");
const fs = require('fs');
const Products = db.product;
const getAll = async (req, resp) => {
    try {
        let product = await Products.findAll();
        resp.status(200).json({ 'error': false, data: product });
    }
    catch (e) {
        resp.status(400).json({ 'error': true, message: e });
    }

}

const createProduct = async (req, resp) => {
    try {
  

        let body = req.body;
        if (req.file) {
            body.photo = req.file.filename;
        }
        let product = await Products.create(body);
        resp.status(200).json({ 'error': false, data: product });

    }
    catch (e) {
        resp.status(400).json({ 'error': true, message: e });
    }
}

const updateProduct = async (req, resp) => {

    try{
        let id= req.params.id;
        let product = await Products.findByPk(id); 
        if(product){
            let body = req.body;
            if(req.file){
                body.photo = req.file.filename;
                if(product.photo != null){
                    fs.unlinkSync("public/images/"+product.photo);
                }
            }
            await Products.update(body,{where:{id:id}});
            resp.status(200).json({ 'error': false, data: null, message: 'Producto Modificado' });
        }
        else{
            resp.status(404).json({ 'error': true, message: 'Error el Id de producto no existe' }); 
        }
    }
    catch (e) {
        resp.status(400).json({ 'error': true, message: e });
    }

}

const deleteProduct = async (req, resp) => {

    try {
        let id = req.params.id;

        let product = await Products.findByPk(id); 
        if(product){
            if(product.photo != null ){
                fs.unlinkSync("public/images/"+product.photo);
            }
            await Products.destroy({ where: { id: id } });
            resp.status(200).json({ 'error': false, data: null, message: 'Producto Eliminado' });
        }
        else{
            resp.status(404).json({ 'error': true, message: 'Error el Id de producto no existe' });
        }

    /*    await Products.findAll({ where: { id: id } }).then(async (result) => {

            if (result.length > 0) {
                if(result[0]['photo'] != null ){
                    fs.unlinkSync("public/images/"+result[0]['photo']);
                }
                await Products.destroy({ where: { id: id } });
                resp.status(200).json({ 'error': false, data: null, message: 'Producto Eliminado' });
            }
            else {
                resp.status(404).json({ 'error': true, message: 'Error el Id de producto no existe' });
            }

        });*/

    }
    catch (e) {
        resp.status(400).json({ 'error': true, message: e });
    }


}


module.exports = { getAll, createProduct, updateProduct, deleteProduct }