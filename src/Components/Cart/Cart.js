import React,{useState} from "react";
import Button from "../UI/Button";
import classes from './Cart.module.css'
import Module from "../Portal/Module";


const Cart=(props)=>{
    const [cartMessage,setCartmessage]=useState(false)
  const onClicHandler=()=>{
    setCartmessage(!cartMessage)
    console.log('cart handler')
  }
    return(
    <div className={classes.cart}>
        <div>
        {cartMessage &&  <Module></Module> }
        </div>
       
        <h3>your cart</h3>
        <Button name='your cart' type='button'  onClick={onClicHandler}></Button>
        
    </div>
    )
}

export default Cart
