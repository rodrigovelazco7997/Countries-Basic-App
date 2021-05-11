import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActivity } from '../../redux/actions'
import {action} from '../../redux/actions'
import './SearchActivity.css'


export function SearchActivity() {


    const dispatch = useDispatch()

    const allActivities = useSelector(state => state?.allActivities)

    useEffect(()=>{
        dispatch(getActivity())
    },[dispatch])
    
    const handleAct=(e)=>{
        
        const {value}= e.target
        if(value!=="false"){
        dispatch(action(allActivities[value].countries))}
    }


    return (
        <div>
            <select className="activitySelect" onChange={handleAct}>
                
                {
                    allActivities.length===0?<option>No activities</option>:<option value="false">Select an activity</option>
                }


                {
                allActivities?.map(act=><option value={act.id-1} key={act.name}>{act.name}</option>
                )}
                
                
                
            </select>
            
        </div>
    )
}
