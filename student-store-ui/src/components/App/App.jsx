import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import Footer from "../Footer/Footer"
import NotFound from "../NotFound/NotFound"
import { useState } from "react"
import { useEffect } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import "./App.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import axios from "axios"

export default function App() {
 const [products, setProducts] = useState([])
 const [isFetching, setFetching] = useState(false)
 const [error, setError] = useState("No Error")
 const [isOpen, setOpen] = useState(false) //represents the open/closed state of the sidebar
 const [shoppingCart, setShoppingCart] = useState([])
 const [input, setInput] = useState("")
 const [quantities, setQuantities] = ([])
// const [CheckoutForm, setCheckoutForm] = 

  useEffect(() => {
    axios.get('https://codepath-store-api.herokuapp.com/store').then(response => {
      setProducts(response.data.products)
      setFetching(true)
    }).catch (error => {
      setError("There was an error getting the data")
      setFetching(false)
  });}
 , [])
/*
 let getQuantity = (product) => {
  let productData = shoppingCart.filter(current => {
    (current.id === product.id)
   })
   console.log("getQuantity call check", productData)
   return productData[0]
}
*/
 //Toggles the sidebar
 let handleOnToggle = ()=> {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("open")
    if(isOpen){
      setOpen(false)
    }
    else {
      setOpen(true)
    }
 }

 let handleAddItemToCart = (productId) => {
      let newProd = {itemId: productId, quantity:1}
      let cartCopy = shoppingCart.filter(current => { if (current.itemId === productId){
          newProd.quantity = current.quantity + 1;
          return false;
        } else {return true;}
      }
    )  
    cartCopy.push(newProd)
      setShoppingCart(cartCopy)
}

let handleRemoveItemToCart  = (productId) => {
  let newProd = {itemId: productId, quantity:1}
      let cartCopy = shoppingCart.filter(current => { if (current.itemId === productId){
          newProd.quantity = current.quantity - 1;
          return false;
        } else {return true;}
      }
    )  
    console.log(newProd.name)
      if(newProd.quantity != 0){cartCopy.push(newProd)}
      setShoppingCart(cartCopy)
}

let getQuantity = (currentProduct)=> {
  let item = shoppingCart.find((current) => {
    return (current.itemId === currentProduct.id)
   })
   return (!item?null:item.quantity)

}

 



  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {}
          <Navbar />
          <Sidebar isOpen = {isOpen} products = {products} handleOnToggle = {handleOnToggle} shoppingCart = {shoppingCart}/>
          <Routes>
              <Route path = "/" element ={<Home products = {products} input = {input} setInput = {setInput}  
              handleRemoveItemToCart = {handleRemoveItemToCart} handleAddItemToCart = {handleAddItemToCart} 
              shoppingCart = {shoppingCart} getQuantity = {getQuantity}/>}/> 
              <Route path= "/products/:productId" element={<ProductDetail getQuantity = {getQuantity}  handleRemoveItemToCart = {handleRemoveItemToCart} handleAddItemToCart = {handleAddItemToCart}/>}/>
              <Route path= "*" element ={<NotFound/>}/>
          </Routes>
          <Footer/>
        </main>
      </BrowserRouter>
    </div>
  )
}
