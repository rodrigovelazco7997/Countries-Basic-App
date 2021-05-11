const { Router } = require('express')
const {searchCountry,getForId,mercadoPagoLaPutaMadre}=require('./controllers/country.controllers');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.get("/",searchCountry)
router.get("/:id",getForId)





// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;