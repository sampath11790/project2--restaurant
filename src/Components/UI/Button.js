import React from "react"
import classes from './Button.module.css'
const Button=(props)=>{
    return(
        <div className={classes.button} >
            <button type={props.type} onClick={props.onClick}>{props.name}</button>
        </div>
    )
}

export default Button