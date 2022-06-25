import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import Footer from "../Footer/Footer"
import Orders from "../Orders/Orders"
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
 const [error, setError] = useState(null)
 const [isSubmitted, setSubmitted] = useState(null)
 const [isOpen, setOpen] = useState(false) //represents the open/closed state of the sidebar
 const [shoppingCart, setShoppingCart] = useState([])
 const [input, setInput] = useState("")
 const [checkoutForm, setCheckoutForm] = useState({name:"", email:""})
 const [receipt, setReceipt] = useState(null)
 const [ordersError, setOrdersError] = useState(null)
 const [pastOrders, setPastOrders] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/store').then(response => {
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
      setSubmitted(null)
    }
    else {
      setOpen(true)
      setError(null)
      setReceipt(null)
    }
 }

 //adds items to the shopping cart
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
//removes items from the shopping cart
let handleRemoveItemFromCart  = (productId) => {
  let newProd = {itemId: productId, quantity:1}
      let cartCopy = shoppingCart.filter(current => { if (current.itemId === productId){
          newProd.quantity = current.quantity - 1;
          return false;
        } else {return true;}
      }
    )  
      if(newProd.quantity != 0){cartCopy.push(newProd)}
      setShoppingCart(cartCopy)
}
//gets the user's info
let handleOnCheckoutFormChange = (name, value) => {
 
  
      setCheckoutForm(currentState =>  ({
        ...currentState, [name]:value
      }))
}
//submits the users order
let handleOnSubmitCheckoutForm = async () => {
  try {
    let response =  await axios.post("http://localhost:3001/store" , {
      shoppingCart,
      user: {
        name:checkoutForm.name, 
        email:checkoutForm.email
      }
      })
      setReceipt(response.data.purchase.receipt)
      setError(null)
      console.log(response)
  }
  catch(error) {
  
    setError(error.response.data.error.message)
  }
}
//gets the user's past orders
let handleOnPastOrders = () => {
  axios.get('http://localhost:3001/store/purchases').then(response => {
    console.log(response)
    setPastOrders(response.data.purchases)
  }).catch (error => {
    setOrdersError(error)
})
}
//gets the quantity for each item the user has added
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
          <Sidebar isOpen = {isOpen} products = {products} handleOnToggle = {handleOnToggle} shoppingCart = {shoppingCart}  setShoppingCart = {setShoppingCart}
          setCheckoutForm = {setCheckoutForm}  isSubmitted = {isSubmitted} setSubmitted = {setSubmitted}
          checkoutForm = {checkoutForm} handleOnCheckoutFormChange = {handleOnCheckoutFormChange} handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm} error = {error}
          receipt = {receipt} />
          <Routes>
              <Route path = "/" element ={<Home products = {products} input = {input} setInput = {setInput}  
              handleRemoveItemToCart = {handleRemoveItemFromCart} handleAddItemToCart = {handleAddItemToCart} 
              shoppingCart = {shoppingCart} getQuantity = {getQuantity}/>}/> 
              <Route path= "/products/:productId" element={<ProductDetail getQuantity = {getQuantity}  handleRemoveItemToCart = {handleRemoveItemFromCart} handleAddItemToCart = {handleAddItemToCart}/>}/>
              <Route path= "*" element ={<NotFound/>}/> 
              <Route path = "/purchases" element = {<Orders handleOnPastPurchases = {handleOnPastOrders} orders = {ordersError} setOrdersError = {setOrdersError} setPastOrders = {setPastOrders} pastOrders = {pastOrders}/>}/>
          </Routes>
          <Footer/>
        </main>
      </BrowserRouter>
    </div>
  )
}
