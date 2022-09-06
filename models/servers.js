const express = require('express')
const cors = require("cors");
const { dbConection } = require('../database/config');

class server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios";

        //conectar a base de datos
        this.conectarDB();

        //middlewares
        this.middlewares();
        //rutas de aplicacion
        this.routes();
       

    }

    async conectarDB(){
    await dbConection();

    }



        middlewares(){
            //cors
            this.app.use(cors())

            //parseo y lectura del body
            this.app.use(express.json());

            //directorio publico
            this.app.use(express.static("public"))
        
    }

    routes() {
  this.app.use( this.usuariosPath ,require("../routes/usuarios"))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("servidor corriendo en puerto", this.port );


        });




    }
}


module.exports = server;
