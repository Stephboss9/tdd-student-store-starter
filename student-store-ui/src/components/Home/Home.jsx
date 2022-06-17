import * as React from "react"
import Hero from "../Hero/Hero"
import "./Home.css"
import About from "./About"
import Contact from "./Contact"

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
            <i className="material-icons">menu</i>
        </div>
        <h3 className = "search"> All Categories</h3>
        <button className = "menu-item"> Clothing</button>
        <button className = "menu-item"> Clothing</button>
        <button className = "menu-item"> Clothing</button>
        <button className = "menu-item"> Clothing</button>
      </div>
      {console.log(props.products[4])}
      (<ProductGrid products = {props.products}/>)
      <About/>

      <Contact/>
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
     {products.products.map(currentProduct => {
        return (<ProductCard key = {currentProduct.id} product = {currentProduct}/>)
      })}
    </div>
  )
}


export function ProductCard(product) {
  return (
    <div className="product-card">
      <div className="media">
      <img class = "product-image" src = {product.product.image}/>
      </div>
        <div className = "product-info">
            <div className="main-info">
            <h4>{product.product.name}</h4>
            <h4 className= "product-price">${product.product.price}</h4>
             </div>
          <div className = "product-actions">
            <button className="add"><i className="material-icons">add</i></button>
            <button className="remove"><i className="material-icons">remove</i></button>
          </div>
        </div>
        
    </div>
  )
}

