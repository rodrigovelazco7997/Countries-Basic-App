import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import {onlyOne} from '../../redux/actions'
import './specific.css'

export const SpecificCountry = (props) => {
    
    const urlId=useParams().id

    const dispatch=useDispatch()

    const unico = useSelector(state => state.one)

    useEffect(()=>{
        dispatch(onlyOne(urlId))
    },[dispatch,urlId])     

    return (
        <div className="page"> 
        <header className="navBarTrucho">
            <div>
                <div className="volver">
                    <Link className="hola" to="/home">HOME</Link>
                </div>
            </div>
        </header>
        <div className="titlesito">+ Info</div>
            
            <div className="caja">
                <div>
                    
                    <div className="flag">
                        <img className="bandera" alt="flag" src={unico.flag}/>
                    </div>
                </div>
                <div>
                <div className="cajaMenor"> 
                    <div className="name">{unico.name}</div>  
                    <div className="names">Alpha Code = <span className="info">{unico.code} </span></div>  
                    <div className="info">Continent = {unico.continent}</div>  
                    <div className="info">Capital = {unico.capital}</div>  
                    <div className="info">Subregion = {unico.subregion}</div>  
                    <div className="info">Area = {unico.area}</div>  
                    <div className="info">Population = {unico.population}</div>  
                    {unico.activities?.length>0 &&<span>Touristic Activities= {
                        unico.activities?.map(e=>{
                        return(
                            <div>{e.name}</div>
                        )
                    }
                    )
                    }</span>        }

                </div>
                
                </div>
               
            </div>
        </div>
    )
}
