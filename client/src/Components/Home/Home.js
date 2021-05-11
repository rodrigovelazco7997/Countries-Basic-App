import { NavBar } from '../NavBar/NavBar'
import {Pagination} from '../Pagination/Pagination'
import './Home.css'


export function Home(){
    
    

    return(
        <div className="home">
            <header className="header">
                <NavBar/>     
            </header>
            <div className="full">
                <Pagination/>      
            </div>   
        </div>
    )
}


