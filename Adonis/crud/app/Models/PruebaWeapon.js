'use strict'
 
/**
*  @var Mongoose mongoose
*/
const mongoose = use('Mongoose')
 
let pruebaWeaponSchema = mongoose.Schema({
    id: ObjectId,
    name: String,
    type: String
});
 
module.exports = mongoose.model('PruebaWeapon', pruebaWeaponSchema)