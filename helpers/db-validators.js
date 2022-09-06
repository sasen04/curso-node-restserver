const Role = require("../models/role");
const Usuario = require ("../models/usuario");



const esRoleValido = async (rol = "") => {
    const existeRol = await Role.findOne ({ rol });
    if(!existeRol){
        throw new Error(`EL rol ${rol} no esta registrado en la base de datos`)
    }
}

const emailExiste = async(correo ="") =>{
existeEmail = await Usuario.findOne({correo});
if (existeEmail){
    throw new Error(`EL correo ${correo} ya esta registrado`)
    };
}
const existeUsuarioPorId = async(id) =>{


    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario){
        throw new Error(`EL Id no existe ${id}`)
        };
    }

module.exports ={
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}