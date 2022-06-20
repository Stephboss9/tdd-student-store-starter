import React from 'react'
import "./Search.css"

export default function Search(props) {
  return (
    <div className='search-container'>
        <div className='row'>
        <form className = "search-bar">
            <input className = "search-input" placeholder="...search" onChange={props.handleOnSearchChange}></input>
            <button className="search-btn"><i className = "material-icons search-icon">search</i></button>
        </form>
        <span className = "help"> 
        <i className="material-icons">help</i>
        </span>
        <span className= "shopping-cart-btn">
            <i className="material-icons cart">shopping_cart</i>
            
        </span> 
        </div>
        
        <Categories setInput = {props.setInput} handleCategory = {props.handleCategory}/>
          
    </div>
    
  )
   
}

 export function Categories(props) {
   return (
    <div className = "row">
    <div className = "hamburger-menu">
        <i className="material-icons">menu</i>
    </div>
    
    <button onClick = {()=> props.handleCategory("")} className = "menu-item active"> All Categories</button>
    <button onClick = {()=> props.handleCategory("clothing")} className = "menu-item"> Clothing</button>
    <button onClick = {()=> props.handleCategory("food")} className = "menu-item"> Food</button>
    <button onClick = {()=> props.handleCategory("accessories")} className = "menu-item"> Accessories</button>
    <button onClick = {()=> props.handleCategory("tech")} className = "menu-item"> Tech</button>
    
  </div>
   )
 }
 