"use stric"
//imortando librerias 
const express =  require("express")
const bodyParser = require("body-parser")
const app= express()
const usuarioControllers = require("./controlers/usuarios")
const cors =  require("cors")


app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())
app.use(cors())
//peticion get para obtener productos
app.get("/api/usuarios",usuarioControllers.getUsuarios)

//preticion get para obtener un producto especificado por una id
app.get("/api/usuarios/:usuarioid",usuarioControllers.getUsuario)

// consultar api por email
app.get("/api/usuarios2/:usuarioEmail", usuarioControllers.getByEmail)


//peticion post para enviar datos a un producto 
app.post("/api/usuarios", usuarioControllers.registrarUsuario)



// peticion put para actualizar un producto especificado por su id
app.put("/api/producto/:productoId",(req,res) =>{

})
// peticion delete para eliminar un producto especificado por su id
app.delete("/api/producto/:productoId",(req,res)=>{

})

module.exports = app