import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { init } from "../../redux/actions"
import './OrderBy.css'

export const OrderBy = () => {

const dispatch = useDispatch()

const [parametro, setParametro] = useState("name")
const [order, setOrder] = useState("ASC")

const  handleChange=(e)=>{
    const {value}=e.target
    setParametro(value)
    dispatch(init(null,null,null,value,order))
}

const handleOrder=(e)=>{
    const {value}=e.target
    setOrder(value)
    dispatch(init(null,null,null,parametro,value))
}



    return(
        <div className="allOrder"> 
            <div className="params">
                <span className="moveteporfavor">
                <select onChange={handleChange}>
                    <optgroup label="Choose">
                        <option>Order by...</option>
                        <option value="name">Name</option>   
                        <option value="area">Area</option> 
                        <option value="population">Total population</option>                          
                    </optgroup>
                </select>
                <select name="order" onChange={handleOrder}>
                    <option>Select an option</option>
                    <option value="ASC">Lower to higher</option>
                    <option value="DESC">Higher to lower</option>
                </select>

                </span>
            </div>
            <div>
                <span>
              
                    
                </span>
            </div>
        

        </div>

    )
}