"use stric"
const Usuario =  require("../modelo/usuario") 


function getUsuario (req,res){
    let usuarioid = req.params.usuarioid //obtener parametros desde la url
    
     //buscar usuario por id con la funcion de mongoose findbyId
      Usuario.findById(usuarioid, (err,usuario)=>{
          if(err) return handleError(err);
          if(!usuario) return res.status(404).send({message:"usuario no encontrado"})
          res.status(200).send(usuario)
          console.log(usuario);
      })
}

function getUsuarios (req,res){

       //obtener lista de todos los usuarios!
       Usuario.find({},(err,usr)=>{
        if(err) return res.status(500).send({message:`error:${err}}`})
        res.status(200).send(usr)
    })

}
function getByEmail(req,res){
    let usuarioEmail = req.params.usuarioEmail //obtener parametros desde la url
    
     //buscar usuario por id con la funcion de mongoose findbyId
      Usuario.find({"email":usuarioEmail}, (err,usuario)=>{
          if(err) return handleError(err);
          if(!usuario) return res.status(404).send({message:"usuario no encontrado"})
          res.status(200).send(usuario)
          console.log(usuario);
      })
   

}
function registrarUsuario(req,res){
    console.log("POST /api/usuarios")
    console.log(req.body)
    // enviando mensaje en caso de respuesta exitosa
    res.status(200).send({message:"user registrado"})
    
    
   // Asignando datos
      let usuario = new Usuario()
     usuario.nombre = req.body.nombre
     usuario.apellido = req.body.apellido
     usuario.email = req.body.email
      usuario.password = req.body.password
        
   
     /*  salvando o guandando los Datos 
    a la coleccion de nuestra base de datos  */                        
      usuario.save((err,usuarios) => {
            if(err) res.status(500).send({messagge:`Error al salvar la base de datos: ${err}`})
            res.status(200).send({message:"Guardado"})
        })  
}

module.exports= {
    getUsuario,
    getUsuarios,
    getByEmail,
    registrarUsuario
}