const { Router } = require('express')
const{postActivities,getActivities}=require('./controllers/activity.controller')

const router = Router();

router.post("/",postActivities)
router.get("/",getActivities)

module.exports= router
