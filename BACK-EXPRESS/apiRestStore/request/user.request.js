const Joi = require('joi');

const validateUser = (req,resp,next) =>{

    const Schema = Joi.object({
        email:Joi.string().max(45).email().required().messages({
            "string.empty":"El correo es obligatorio",
            "string.email":"Ingrese un correo electronico valido"
        }),
        name:Joi.string().max(45).required(),
        last_name:Joi.string().max(45).required(),
        password:Joi.string().max(45).required(),
        phone:Joi.string().max(12),
        type_user:Joi.integer(),
        gender:Joi.integer()
    });

}

module.exports = validateUser;