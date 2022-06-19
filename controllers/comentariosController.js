import { Comentarios } from '../models/comentarios.js'


const guardarTestimonial = async (req, res) =>{

     // Validar
     const { nombre, correo, mensaje } = req.body;
     console.log(req.body);

     const errores = [];

     if(nombre.trim() === ''){
          errores.push({mensaje : 'El nombre está vacío'});
     }

     if(correo.trim() === ''){
          errores.push({mensaje : 'El Correo está vacío'});
     }

     if(mensaje.trim() === ''){
          errores.push({mensaje : 'El Mensaje está vacío'});          
     }
     if(errores.length > 0){

          // Consultar comentarios existentes
          const comentarios = await Comentarios.findAll();

          // Mostrar la vista con errores
          res.render('comentarios', {
               pagina: 'Comentarios',
               errores,
               nombre,
               correo,
               mensaje,
               comentarios
          });
     }else{
          try{
               await Comentarios.create({
                    nombre,
                    correo,
                    mensaje
               });

               res.redirect('/comentarios');

          }catch (error){
               console.log(error);
          }


     }

}



export { 
     guardarTestimonial 
}