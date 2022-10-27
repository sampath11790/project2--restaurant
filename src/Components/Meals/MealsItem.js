import React,{useState} from "react"
import Button from "../UI/Button"
import classes from './MealsItem.module.css'
const MealsItem=(props)=>{
    const [amount,setAmount]=useState(1)
    const buttonHandler=()=>{
       setAmount(amount+1)
       //console.log(amount)
        console.log("button handler")
    }
    return(
       
        <React.Fragment>
        
            <div className={classes.listitem}>
                
        
       <div className={classes.item}>
        <h3>{props.name} ---</h3> 
        <h3>{"₹"+props.price}</h3>
        </div>
        <h3> {`Qty  ${amount}`}</h3>
          
        
        
        <Button onClick={buttonHandler} type='button' name='Addcart'></Button>
        </div>
        </React.Fragment>
    )
}
export default MealsItem