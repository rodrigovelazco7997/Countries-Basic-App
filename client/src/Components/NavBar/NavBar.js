import { SearchBar } from '../SearchBar/searchBar'
import {Filter} from '../Filter/Filter'
import {OrderBy} from '../OrderBy/OrderBy'
import { Link } from 'react-router-dom'
import { SearchActivity } from '../SearchActivity/SearchActivity'
import './NavBar.css'




export const NavBar=()=>{
    return(
    <div className="totalForm">
        <ul className="list">
            <div className="addButton">
                <li className="button">
                    <Link to="/home/t_activity"> Add Activity </Link>
                </li>
            </div>
            <div>
                <li className="select">
                    <OrderBy/>
                </li>
            </div>
            <div>
                <li className="select">
                    <Filter/>      
                </li>
            </div>
            <div>
                <li className="select">
                    <SearchActivity/> 
                </li>
            </div>
            <div>
                <li className="searchBar">
                    <SearchBar/> 
                </li>
            </div>       
        </ul>
</div>)
}