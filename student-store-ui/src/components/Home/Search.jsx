import React from 'react'
import "./Search.css"

export default function Search(props) {
  return (
    <div className='search-container'>
        <div className='row'>
        <form className = "search-bar">
            <input className = "search-input" placeholder="...search" onChange={props.handleOnSearchChange}></input>
            <button className="search-btn"><i className = "material-icons">search</i></button>
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

 export function Categories(props) {
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
 