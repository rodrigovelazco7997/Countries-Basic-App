import React from 'react'
import { useDispatch } from 'react-redux'
import {init} from '../../redux/actions'
import './Filter.css'
export const Filter=()=>{
    const dispatch = useDispatch()

const handleChange=(e)=>{
    let {value}=e.target
    if(value!=="none"){
        dispatch(init(null,null,value))
    }else{
        dispatch(init())
    }
}

    return(

        <div>
                        <select className="continentSelect" name="select" onChange={handleChange}>
                            <optgroup label="Select an a continent">
                                <option value="none">Select one Continent</option>
                                <option value="Americas">Américas</option>                                   <option value="Asia">Asia</option>   
                                <option value="Europe">Europe</option>   
                                <option value="Oceania">Oceanía</option>   
                                <option value="Africa">África</option>
                                <option value="Polar">Polar</option> 
                                <option value="SinContinente">No Continent</option> 
                            </optgroup>
                        </select>                
                    </div>  )
}