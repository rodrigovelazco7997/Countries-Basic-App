import React from 'react'

export const Cards = ({e}) => {
    return (
        
            <li className="countries" id={e.id} key={e.id}>
                        <div>
                            <img className="band" alt="Flag" src={e.flag}/>
                        </div>
                        <div>
                           {e.name}
                        </div>
                        <div>
                            <div className="continente">{e.continent}</div>
                        </div>
                            </li>
        
    )
}
