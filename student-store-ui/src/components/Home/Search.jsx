import React from 'react'
import "./Search.css"

export default function Search() {
  return (
    <div className='search-container'>
        <div className='row'>
     <form className = "search-bar">
            <input className = "search-input" placeholder="...search"></input>
            <i className = "material-icons">search</i>
        </form>
        <span className = "help"> 
        <i className="material-icons">help</i>
        </span>
        <div className= "shopping-cart">
            My Cart
            <i className="material-icons">shopping_cart </i>
        </div> 
        </div>
        
        <Categories/>
          
    </div>
    
  )
   
}

 
 export function Categories() {
   return (
    <div className = "row">
    <div className = "hamburger-menu">
        <i className="material-icons">menu</i>
    </div>
    <h3 className = "search"> All Categories</h3>
    <button className = "menu-item"> Clothing</button>
    <button className = "menu-item"> Clothing</button>
    <button className = "menu-item"> Clothing</button>
    <button className = "menu-item"> Clothing</button>
  </div>
   )
 }
 