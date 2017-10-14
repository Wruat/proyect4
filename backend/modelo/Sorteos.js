"use strict"

const mongoose = require("mongoose") // importando mongoose library
const Schema = mongoose.Schema //importando Schema de mongoose


//creando un esquema de usuario
const usuarioSchema = Schema({
        id : Number,
        nombreA: String,
        hora: String,
        fecha: Date
       


})
//exportando el modelo 
module.exports = mongoose.model("Usuario",usuarioSchema)//creando el modelo