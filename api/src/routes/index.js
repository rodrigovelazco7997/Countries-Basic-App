const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/",(req,res)=>{
    res.send("Correct res")
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
