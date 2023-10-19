const Joi = require('joi');
const validateRequest = require('../middlewares/validateRequest');

const validateUser = (req,resp,next) =>{

    const Schema = Joi.object({
        email:Joi.string().max(45).email().required().messages({
            "any.required":"Debes ingresar el Correo",
            "string.empty":"El correo es obligatorio",
            "string.email":"Ingrese un correo electronico valido",
            'string.max':"Debes tener como maximo 45 caracteres"
        }),
        name:Joi.string().max(45).required().messages({
            'any.required':"El nombre es requerido",
            'string.max':"Debes tener como maximo 45 caracteres"
        }),
        last_name:Joi.string().max(45).required().messages({
            'any.required':"El apellido es requerido",
            'string.max':"Debes tener como maximo 45 caracteres"
        }),
        password:Joi.string().max(45).required().messages({
            'any.required':"El passowrd es requerido",
            'string.empty':"Ingrese su contraseña",
            'string.max':"Debes tener como maximo 45 caracteres"
        }),
        phone:Joi.string().max(12).messages({
            'string.empty':"Ingrese el telefono",
            'string.max':"Debes tener como maximo 12 caracteres"
        }),
        type_user:Joi.number().integer().messages({
            'number.base':"ingrese solo numeros"
        }),
        gender:Joi.number().integer().messages({
            'number.base':"ingrese solo numeros"
        })
    });

    validateRequest(req,resp,next,Schema);

}

module.exports = validateUser;