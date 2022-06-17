import * as React from "react"
import Hero from "../Hero/Hero"
import "./Home.css"

export default function Home(props) {
  return (
    <div className="home">
      <Hero/>
      <div className = "row">
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

      <div className = "row">
        <div className = "hamburger-menu">
            <i className="materials-icon">menu</i>
        </div>
        <h3 className = "search"> All Categories</h3>
        <button className = "menu-item"> Clothing</button>
        <button className = "menu-item"> Clothing</button>
        <button className = "menu-item"> Clothing</button>
        <button className = "menu-item"> Clothing</button>
      </div>
      {console.log(props.products)}
      <ProductGrid products = {props.products}/>
    </div>
  )
} 




export function ProductGrid(products) {
/*
 {products.map(currentProduct => {
        <ProductCard product = {currentProduct}/>
      })}
*/
  return (
    <div className="product-grid">
     

    </div>
  )
}


export function ProductCard(product) {
  return (
    <div className="product-card">
    </div>
  )
}

