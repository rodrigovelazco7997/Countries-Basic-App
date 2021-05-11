import React, { useEffect } from "react";
import "./LandingPage.modules.css";
import { Link } from "react-router-dom";
import { init } from "../../redux/actions";
import { useDispatch } from "react-redux";

export function Landing() {

const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(init())
    },[dispatch])  

    return (
    
    <div className="total">
        <div className="Box">
            <div className="textBox">
                <h1 className="title">Welcome to the world</h1>  
            </div>
            
            <div className="titleBox">
                <p className="text">
                    Here you will find the best info about the most countries around the
                    world
                </p>
            </div>
            <div className="buttonx">
                <Link className="btnR" to="/home">
                    Enter
                </Link>
            </div>
        </div>
        
    </div>
);
}
