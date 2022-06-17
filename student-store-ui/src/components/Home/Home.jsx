import * as React from "react"
import Hero from "../Hero/Hero"
import "./Home.css"
import About from "./About"
import Contact from "./Contact"
import Search from "./Search"
import { useState } from "react"
export default function Home(props) {
  
  const [currentProducts, setCurrentProducts] = useState([])
  const [categoryBtn, setCategoryBtn] = useState(false)
  
   let handleOnSearchChange = (event) => {
    props.setInput(event.target.value)
    setCurrentProducts(props.products.filter(product => {
      return (product.name.toLowerCase().includes(props.input.toLowerCase()))
    }))
   }

   let handleCategory = (categoryName) => {
    setCategoryBtn(true)
    console.log(categoryName)
    setCurrentProducts(props.products.filter(product => {
      return (product.category === categoryName)
    }))
   }
  

  return (
    <div className="home">
      <Hero/>
      <Search setInput = {props.setInput} handleOnSearchChange = {handleOnSearchChange} handleCategory = {handleCategory}/>
      (<ProductGrid  categoryBtn = {categoryBtn} products = {currentProducts.length === 0?props.products:currentProducts} input = {props.input}/>)
      {console.log(props.input)}
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
     {
       products.products.map(currentProduct => {
        return (<ProductCard key = {currentProduct.id} product = {currentProduct}/>)
      })
      
     }
     
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

