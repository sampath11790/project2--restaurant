import React from 'react'
import  ReactDOM  from 'react-dom'
import CartMessage from './CartMessage'
import classes from './Display.module.css'

const Module=(props)=>{
    return(
        <div className={classes.module} >
            {ReactDOM.createPortal(<CartMessage/>,
            document.getElementById("Cartmessage"))}
        </div>
    )
}
export default Module