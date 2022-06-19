import express from "express";
import { 
     paginaInicio, 
     paginaNosotros, 
     paginaViajes, 
     paginaTestimoniales, 
     paginaDetalleViaje 
} from '../controllers/paginasController.js'

import{
     guardarTestimonial
} from '../controllers/comentariosController.js'

const router = express.Router();

router.get('/',paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje); // Utilizamos un comodín

router.get('/comentarios', paginaTestimoniales);

router.post('/comentarios', guardarTestimonial);

export default router;






//router.get('/contacto', paginaContacto);

//  router.get('/',(req, res)=>{ // req - lo que enviamos : res - lo que express nos responde
//      //res.send('Hola Mundo'); // Muestra un mensaje en pantalla
//      //res.json({ id: 1 }); // Devolver un json
//      //res.render();// Se utiliza para mostrarf una vista
//      res.render('inicio', {
//           pagina: 'Inicio'
//      });
//  });