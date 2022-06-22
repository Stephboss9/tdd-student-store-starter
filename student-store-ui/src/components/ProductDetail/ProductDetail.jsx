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
    let {productId} = useParams()

   

    useEffect( () => {
        const obtainProduct = async () => {
        const response = await (axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`))
        const responseData = response.data.product
        setProduct(responseData)}
        obtainProduct()
}, [])

  return (
    <div className='product-detail'>
        <ProductView product = {product} productId = {productId} quantity = {props.getQuantity(product)} handleAddItemToCart = {props.handleAddItemToCart}
        handleRemoveItemToCart = {props.handleRemoveItemToCart}/>
    </div>
  )
}



export function ProductView(props) {
  return (
    <div className='product-view'>
        <span className='id-container'><h2 className='product-id'> Product #{props.productId}</h2></span>
        <div className = "view-info">
        <ProductCard product = {props.product} showDescription = {true} productId = {props.productId}
        quantity = {props.quantity} handleAddItemToCart = {props.handleAddItemToCart}
        handleRemoveItemToCart = {props.handleRemoveItemToCart}/>
        </div>
        
    </div>


   
  )
}



