const {Country,Activity}=require('../../db')
const { Op } = require("sequelize");
const axios =require('axios');
const mercadopago=require('mercadopago');
const { preferences } = require('mercadopago');

mercadopago.configure({
    access_token: 'TEST-1669112607394412-041121-7feaa8d307068512a7059b684241e2c4-741939764'
  });

async function getAll(req,res){
    const all=await Country.findAll()
    res.json(all)
}


async function searchCountry(req,res){
    const {offset}=req.query
    if (req.query.offset){
        const changePage= await Country.findAll({offset,limit:10})
        res.json(changePage)
        }
    else if(req.query.byOrder){
        const {byOrder} =req.query
        if(req.query.upOrDown){
            const {upOrDown}=req.query
            const descend=await Country.findAll({order:[[byOrder,upOrDown]]})
            res.json(descend)
            }
        else{
            const ascend=await Country.findAll({order:[byOrder]})
            res.json(ascend)
            }
        }
    else if(req.query.continent){
        const {continent}=req.query
        const FilterByContinent= await Country.findAll({where:{continent}})
        return res.json(FilterByContinent)
        }
    else if(req.query.name){
        const {name}=req.query
        const searchForName= await Country.findAll({where:{name:{[Op.iLike]:`%${name}%`}}})
            if(searchForName.length===0){
                return res.status(200).json([{name:"This country doesn't exist"}])
            }
        return res.json(searchForName)
        }
    else{     
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(r=>  {
            return r.data.map(async pais=>{        
        await Country.findOrCreate({
            where:{code:pais.alpha3Code},
            defaults:{
                name:pais.name,
                flag:pais.flag,
                continent:pais.region===''?'SinContinente':pais.region,
                capital:pais.capital,
                subregion:pais.subregion,
                area:pais.area,
                population:pais.population
            },
            
                
            })
        })})
        .then(async r=>{
            const firstTen = await Country.findAll({limit:10})
        res.status(200).json(firstTen)
        }) }
        }

async function getForId(req,res){
    const {id}=req.params
    const forId = await Country.findByPk(id,{include:Activity})
    res.json(forId)
}

async function mercadoPagoLaPutaMadre(req,res){
    
   const booking={
       price:200,
       title:"hola",
       quantity:1    
   }
   console.log(mercadopago)
    mercadopago.preferences.create({
        items:[
            {
                title:booking.title,
                unit_price:booking.price,
                quantity:booking.quantity
            }
        ]
    }).then((preference)=>{
        console.log(preference.body.id,preference.body.init_point)
        res.json({preferenceId:preference.id})
    })
}





module.exports={searchCountry,getForId,getAll,mercadoPagoLaPutaMadre}

