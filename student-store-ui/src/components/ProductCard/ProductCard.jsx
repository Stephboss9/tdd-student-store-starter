import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

import "./ProductCard.css"

export default function ProductCard(product) {
    return (
        <div className="product-card">
          
         <Link to = {`/products/${product.product.id}`}> <div className="media">
          <img class = "product-image" src = {product.product.image}/>
          </div>
          </Link>

            <div className = "product-info">
                <div className="main-info">
                <h4 className>{product.product.name}</h4>
                <h4 className= "product-price">${product.product.price}</h4>
                <p className='product-description'>{product.showDescription?product.product.description:null}</p>
                 </div>
              <div className = "product-actions">
                <button className="add"><i className="material-icons">add</i></button>
                <button className="remove"><i className="material-icons">remove</i></button>
              </div>
            </div>
            
        </div>
      )
    }
