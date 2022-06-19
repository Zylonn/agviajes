// const express = require('express'); --> version antigua common
import express from "express";
import router from "./routes/index.js";
import db from './config/db.js';
//import dotenv from 'dotenv/config'


const app = express();


// Conectar la bbdd

db.authenticate()
.then( ()=> console.log('Base de datos conectada') )
.catch( error => console.log(error) );



// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {          // ---> linea de midleware (app.use responde a todos los verbos GEt PUT etc)   
     const year = new Date();
     res.locals.actualYear = year.getFullYear(); //--> locals son variables internas de Express y es donde vamos a crear una variable para leerla en la vista
     res.locals.nombresitio = 'Agencia de Viajes';
     next(); //Para forzar que continue al siguiente midleware poner 'return next()'
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));


// Definir la carpeta pública
app.use(express.static('public'));           // ---> linea de midleware

// Agregar Router
app.use('/', router);                        // ---> linea de midleware


app.listen(port,()=>{                        // ---> linea de midleware
     console.log(`El servidor está funcionando por el puerto ${port}`)
})

