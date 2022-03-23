import React from "react";
import {Link} from "react-router-dom";
import Innavbar from './Innavbar.css';

const Innavbar = (props) => {
    console.log(props.location)
    return (
            <ul className="nav-items">
                <li className={props.location.pathname == "/login" ? "nav-item active" : "nav-item"}>
                    <Link to="/login">Login</Link>
                </li>
                <li className={props.location.pathname == "/signup" ? "nav-item active" : "nav-item"}>
                    <Link to="/signup">Signup</Link>
                </li>
            </ul>
    )
}

export default Innavbar;