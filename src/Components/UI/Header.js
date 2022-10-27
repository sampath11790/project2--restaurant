import React from "react";
import classes from './Header.module.css'
import Cart from "../Cart/Cart";

const Header=()=>{
return(
    <div>
    <header className={classes.header}>
     
     <h1>ReactMeals</h1>
     <Cart></Cart>
       
</header>
    </div>
)
}
export default Header
