import React, { useState } from 'react'
import './searchBar.css'
import { useDispatch} from 'react-redux'
import { init } from '../../redux/actions'

export const SearchBar=()=>{
const [forName, setForName] = useState("")



const dispatch= useDispatch()

const onSearch=(e)=>{
        console.log(e.target)
        e.preventDefault()
        dispatch(init(null,forName))
        }



return(
    <div>
        <form onSubmit={onSearch}>
            <div>
                <img src='./loupe.png' className="buttonSearch" alt="loupe" onClick={onSearch}/>
            </div>
            <div className="searchbar">
                <input 
                type="text" 
                placeholder="Insert country" 
                value={forName}
                onChange={ctr=>setForName(ctr.target.value)}></input>
            </div>
           
    </form>
    </div>
)
}