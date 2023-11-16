const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    city: {
        type:String
    },
    province: {
        type:String
    },
    street:{
        type:String
    },
    number: {
        type:String
    },
    code_postal: {
        type:String
    },
    address:{
        type:String
    },
    users_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }

});
const Address = mongoose.model('address',addressSchema);
module.exports = Address