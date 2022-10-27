import React from "react"
import MealsItem from "./MealsItem"
import Card from "../Card/Card"
import classes from './MealsList.module.css'

const MealsList=(props)=>{
    console.log(props.food)
    return(
        <Card className={classes.mealsList} >
            <ul>
        {props.food.map((item,index)=>
            <li>
            <MealsItem name={item.name} price={item.price} key={index} ></MealsItem>
            </li>
            
        )}
       </ul>
       </Card>
    )
}
export default MealsList