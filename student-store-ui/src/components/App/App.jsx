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
 const [input, setInput] = useState("")
// const [CheckoutForm, setCheckoutForm] = 

let handleOnSubmit = () => {
  props.setInput
 }

  useEffect(() => {
    axios.get('https://codepath-store-api.herokuapp.com/store').then(response => {
      setProducts(response.data.products)
      setFetching(true)
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
          <Home products = {products} input = {input} setInput = {setInput}/>
          <Sidebar />
          <Footer/>
        </main>
      </BrowserRouter>
    </div>
  )
}
