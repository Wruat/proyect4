"use stric"
//imortando librerias 
const app =  require("./app")
const mongoose = require("mongoose")
const port = process.env.port || 3001







//conectar con mongodb://localhost:27017/nombreDb                    
mongoose.connect("mongodb://localhost:27017/proyecto4",(err,res)=>{
    if(err) throw err
    console.log("Conexion a la base de dato establecida")
})
//escuchar...
app.listen(port , ()=>{
    console.log(`Api rest corriendo en http://localhost:${port}`)
})