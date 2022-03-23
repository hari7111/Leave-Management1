import React from "react";

import "./Input.css"

const Input = (props) => {
    return (
        <div className="input">
            <input type={props.type} 
                onChange={props.onChange ? (e) => props.onChange(e) : null}
                onClick={props.onClick ? (e) => props.onClick(e) : null}
                required={props.required} 
                placeholder={props.placeholder} 
                value={props.value}/>
        </div>
    )
}

export default Input;
