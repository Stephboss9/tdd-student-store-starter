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
 const [isOpen, setOpen] = useState(false)
 const [shoppingCart, setShoppingCart] = useState([])
// const [CheckoutForm, setCheckoutForm] = 


  useEffect(() => {
    axios.get('https://codepath-store-api.herokuapp.com/store').then(response => {
      console.log(response.data.products)
      setProducts(response.data.products)
      console.log(products[0] + "in App.jsx")

    }).catch (error => {
      setError("There was an error getting the data")
      setFetching(false)
  });}
 , [])

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {}
          <Navbar />
          {}
          <Home products = {products}/>
          <Sidebar />
          <Footer/>
          <Routes>
              <Route path ="/products/:productId" element = {<ProductDetail/>}/>
              <Route path ="*" element = {<NotFound/>}/>
              <Route  path="/" element = {<Home/>}/>
              <Route path = "/ShoppingCart" element={<ShoppingCart/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
