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

   

    useEffect( () => {
        setIsLoading(true)
        const obtainProduct = async () => {
        const response = await (axios.get(`http://localhost:3001/store/products/${productId}`))
        const responseData = response.data.product
        setProduct(responseData)}
        obtainProduct()
        setIsLoading(false)
}, [])

  return (
    <div className='product-detail'>
        <ProductView isLoading = {isLoading} product = {product} productId = {productId} quantity = {props.getQuantity(product)} handleAddItemToCart = {props.handleAddItemToCart}
        handleRemoveItemToCart = {props.handleRemoveItemToCart}/>
    </div>
  )
}


export function ProductView(props) {
  return (
    <div className='product-view'>
      
        {props.isLoading?<span className='id-container'><h2 className='loading'> Loading...</h2></span>:<span className='id-container'><h2 className='product-id'> Product #{props.productId}</h2></span>}
        {!props.isLoading?<div className = "view-info">
        <ProductCard product = {props.product} showDescription = {true} productId = {props.productId}
        quantity = {props.quantity} handleAddItemToCart = {props.handleAddItemToCart}
        handleRemoveItemToCart = {props.handleRemoveItemToCart}/>
        </div>:null}
        
    </div>
  )
}



