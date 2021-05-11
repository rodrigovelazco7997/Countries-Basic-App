const { Router } = require('express')
const {getAll}=require('./controllers/country.controllers');

const router = Router();


router.get("/",getAll)


module.exports = router;