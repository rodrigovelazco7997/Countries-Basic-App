const {Activity, Country}=require('../../db')

async function postActivities(req,res){
    const {name,difficulty,duration,description,season,country}=req.body
    const tourAct=await Activity.create({
        name,
        difficulty,
        duration,
        description,
        season
    })
    tourAct.addCountries(country)
    res.json(tourAct)
}

 const getActivities= async (req,res)=>{
    const activities=await Activity.findAll({include:Country})
    res.json(activities)
    }

    
module.exports={postActivities,getActivities}
