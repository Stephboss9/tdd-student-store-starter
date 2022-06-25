import React, { useEffect } from 'react'
import Hero from '../Hero/Hero'
import NotFound from '../NotFound/NotFound'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import ProductCard from '../ProductCard/ProductCard'
import "./ProductDetail.css"


export default function ProductDetail(props) {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    let {productId} = useParams()
    const[requestError, setRequestError] = useState(false)
   

    useEffect( () => {
      try {
        setIsLoading(true)
        const obtainProduct = async () => {
        const response = await (axios.get(`http://localhost:3001/store/${productId}`))
        const responseData = response.data.product
        setProduct(responseData)}
        obtainProduct()
        setIsLoading(false)
      }
        catch(error){
          return (<NotFound />)
        }
}, [])

  return (
    <div className='product-detail'>
      {isLoading?<span className='id-container'><h1 className='loading'> Loading...</h1></span>:  <ProductView  product = {product} productId = {productId} quantity = {props.getQuantity(product)} handleAddItemToCart = {props.handleAddItemToCart}
        handleRemoveItemToCart = {props.handleRemoveItemToCart}/>}
       
    </div>
  )
}


export function ProductView(props) {
  return (
    <div className='product-view'>
      
        <span className='id-container'><h1 className='product-id'> Product #{props.productId}</h1></span>
        <div className = "view-info">
        <ProductCard product = {props.product} showDescription = {true} productId = {props.productId}
        quantity = {props.quantity} handleAddItemToCart = {props.handleAddItemToCart}
        handleRemoveItemToCart = {props.handleRemoveItemToCart}/>
        </div>
        
    </div>
  )
}



