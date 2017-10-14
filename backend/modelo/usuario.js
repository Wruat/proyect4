"use strict"

const mongoose = require("mongoose") // importando mongoose library
const Schema = mongoose.Schema //importando Schema de mongoose


//creando un esquema de usuario
const usuarioSchema = Schema({
        id : Number,
        nombre: String,
        apellido: String,
        email: {type:String,unique:true , lowercase:true},
        password: {type:String , select: false} // select es para que no envie el pass al cliente


})
//exportando el modelo 
module.exports = mongoose.model("Usuario",usuarioSchema)//creando el modelo