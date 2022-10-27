import React from "react";
import classes from './CardMessage.module.css'
import Button from "../UI/Button";

const CartMessage=()=>{
    const onClicHandler=()=>{
     console.log('welcome')
    }
    return(
        <div className={classes.cartmessage}>
            <h1> Cart message</h1>
            <h1> Cart message</h1>
           <Button type='button' name='Order' onClick={onClicHandler}></Button>   
           <Button type='button' name='Close' onClick={onClicHandler}></Button>       
        </div>
    )
}

export default CartMessage