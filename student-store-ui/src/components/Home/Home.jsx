import * as React from "react"
import Hero from "../Hero/Hero"
import "./Home.css"
import About from "./About"
import Contact from "./Contact"
import Search from "./Search"
import ProductCard from "../../components/ProductCard/ProductCard"
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
    if(categoryName === "") {
      setCurrentProducts(props.products)
    } else {
    setCurrentProducts(props.products.filter(product => {
      return (product.category === categoryName)
    }))
  }
    console.log(currentProducts)
    console.log(categoryBtn)
   }


  return (
    <div className="home" id = "Home">
      <Hero/>
      <Search setInput = {props.setInput} handleOnSearchChange = {handleOnSearchChange} handleCategory = {handleCategory}/>
      (<ProductGrid  getQuantity = {props.getQuantity} handleRemoveItemToCart = {props.handleRemoveItemToCart} handleAddItemToCart = {props.handleAddItemToCart} categoryBtn = {categoryBtn} products = {props.input.length === 0 && categoryBtn === false?
         props.products:currentProducts} input = {props.input} shoppingCart = {props.shoppingCart}/>)
      <About/>
      <Contact/>
    </div>
  )
} 

export function ProductGrid(props) {
  

  return (
    <div className="product-grid">
     {
       props.products.map(currentProduct => {
        return (<ProductCard showDecription = {false} quantity = {props.getQuantity(currentProduct)} productId = {currentProduct.id} handleRemoveItemToCart = {props.handleRemoveItemToCart} handleAddItemToCart = {props.handleAddItemToCart} key = {currentProduct.id} product = {currentProduct}/>)
      })
     }

    </div>
  )
}


