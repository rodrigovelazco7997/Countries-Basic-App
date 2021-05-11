import React, { useEffect, useState } from 'react'
import './pagination.css'
import { useDispatch, useSelector } from 'react-redux'
import { init } from '../../redux/actions'
import { Link } from 'react-router-dom'
import { Cards } from '../Cards/cards'

export const Pagination=()=>{
    const [offset, setOffset] = useState(0)
   
    const basicInfo = useSelector(state => state?.countries)

    const dispatch = useDispatch() //esta linea siempre va a estar siempre y cuando se utilice el dispatch
    
    useEffect(()=>{
        dispatch(init())
    },[dispatch])    
    

    const handleClickPlus=()=>{
        if(offset+10<250){
        setOffset(offset+10)
        dispatch(init(offset+10))}
    }

    const handleClickMinus=()=>{
        if(offset-10>-1){
            setOffset(offset-10)
        dispatch(init(offset-10))}

    }

    return(
    <div>
        <div >
            <button className="minus"  onClick={handleClickMinus}>-</button>
        </div>
        <div >
            <button className="plus" onClick={handleClickPlus}>+</button>
        </div>
        <ul>
        {
            basicInfo?.map(e=>{
                if(!e.id){
                    return <div className="error">{e.name}</div>
                }else{
                    return( 
                        <React.Fragment key={e.id}> 
                        <Link to={`/home/country/${e.id}`}>
                            <Cards e={e}/>
                        </Link>
                        </React.Fragment>
                            )
                        }
                    }
                    )
                }

                
    
    </ul>
    
</div>  )}