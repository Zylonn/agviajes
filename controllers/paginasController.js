import { Viaje } from "../models/Viaje.js"; 
import { Comentarios } from "../models/comentarios.js";

const paginaInicio = async (req, res)=>{ 

     // Consultar 3 viajes del modelo viaje

     const promiseDB = [];
     promiseDB.push( Viaje.findAll({ limit: 3 }) );
     promiseDB.push( Comentarios.findAll({ limit: 3 }) );


     try {
          //const viajes = await Viaje.findAll({ limit: 3 });
          //const comentarios = await Comentarios.findAll({ limit: 3 })

          const resultado = await Promise.all( promiseDB );

          res.render('inicio', {
               pagina: 'Inicio',
               clase: 'home',
               viajes: resultado[0],
               comentarios: resultado[1]          
          })
          
     } catch (error) {
          console.log(error);
     }


}

const paginaNosotros = (req, res)=>{
     res.render('nosotros', {
         pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res)=>{

     // Cosultar la BBDD

     const viajes = await Viaje.findAll();
     //console.log(viajes);

     res.render('viajes', {
         pagina: 'Próximos Viajes',
         viajes
    });
}

const paginaTestimoniales = async (req, res)=>{
     try{
          const comentarios = await Comentarios.findAll();
          res.render('comentarios', {
               pagina: 'Comentarios',
               comentarios
     });
     }catch(error){
          
     }
}

// Mustre un viaje por su slug
const paginaDetalleViaje = async (req,res) => {

     const { slug } = req.params;

     try{
          const resultado = await Viaje.findOne({ where : { slug } });
          //console.log("------>", resultado.imagen);
          res.render('viajedetalle', {
               pagina: 'Información Viaje',
               resultado
          })

     }catch (error){
          console.log(error);
     }
     //console.log(req.params.slug);
}

export{
     paginaInicio,
     paginaNosotros,
     paginaViajes,     
     paginaTestimoniales,
     paginaDetalleViaje
}


// const paginaContacto =  (req, res)=>{
//       //res.send('Contacto');
//       res.render('contacto', {
//           pagina: 'Contacto'
//      });
// }