import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

import "./ProductCard.css"

export default function ProductCard(props) {

 
    return (
        <div className="product-card">
          
         <Link to = {`/products/${props.product.id}`}> <div className="media">
          <img className = "product-image" src = {props.product.image}/>
          </div>
          </Link>

            <div className = "product-info">
                <div className="main-info">
                <h4 className = "product-name">{props.product.name}</h4>
                <h4 className= "product-price">${props.product.price}</h4>
                <p className='product-description'>{props.showDescription?props.product.description:null}</p>
                </div>
              <div className = "product-actions">
                <div className="buttons">
                  <button className="add" onClick={() => {props.handleAddItemToCart(props.product.id)}}><i className="material-icons">add</i></button>
                  <button className="remove" onClick={()=> {props.handleRemoveItemToCart(props.product.id)}}><i className="material-icons">remove</i></button>
                </div>
                <div className='quantity-container'><span className="product-quantity">{props.quantity}</span></div>
              </div>
            </div>
            
        </div>
      )
    }
