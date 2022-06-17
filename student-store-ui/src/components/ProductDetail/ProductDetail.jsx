import React, { useEffect } from 'react'
import Hero from '../Hero/Hero'
import NotFound from '../NotFound/NotFound'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import ProductCard from '../ProductCard/ProductCard'
import "./ProductDetail.css"


export default function ProductDetail() {
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
        <ProductView product = {product}/>
    </div>
  )
}



export function ProductView(props) {
  return (
    <div className='product-view'>
        <div className = "view-info">
        <ProductCard product = {props.product}/>
        </div>
        
    </div>


   
  )
}



