import * as React from "react"
import "./Sidebar.css"
import { useEffect } from "react"
import "../ShoppingCart/ShoppingCart.css"

export default function Sidebar(props) {



  return (
    <section className="sidebar closed">
        <div className = "wrapper">
          <button className="toggle-button" onClick={props.handleOnToggle}>
            <i className= "material-icons md-48">arrow_forward</i>
          </button>
          {props.isOpen?null:<div className="cart-info">
            <button className="cart-icon"><i className="material-icons md-48">add_shopping_cart</i></button>
            <button className="cart-icon"><i className="material-icons md-48">monetization_on</i></button>
            <button className="cart-icon"><i className="material-icons md-48">fact_check</i></button>
          </div>}
          {props.isOpen?<ShoppingCart isOpen = {props.isOpen} products = {props.products} shoppingCart = {props.shoppingCart}/>:null}
        </div>
    </section >
  )
}


export function ShoppingCart(props) {
  return (
    <div className="shopping-cart hidden">
      <div className="shopping-intro">
        <h4 className="shopping-cart-header">Shopping Cart</h4>
        <button className="cart-icon open"><i className="material-icons md-48 open">add_shopping_cart</i></button>
      </div>
        {props.shoppingCart.length === 0? <h4 className="no-items">No items added to shopping cart yet. Start shopping now!</h4>:null}
        <div className="cart-table-container">
          <div className="cart-table">
            <div className="cart-table-headers">
              <h4 className="cart-table-header">Name</h4>
              <h4 className="cart-table-header">Quantity</h4>
              <h4 className="cart-table-header">Unit Price</h4>
              <h4 className="cart-table-header">Cost</h4>
            </div>
            <div className="cart-table-item-rows">
              {props.shoppingCart.map((product) => { return(
                 <div className="item-row">
                 <h4 className="cart-product-name">{props.products.find((item) => {
                   return (item.id == product.id)  
                 }).name}</h4>
                 <h4 className="cart-product-quantity">{product.quantity}</h4>
                 <h4 className="cart-product-price">{props.products.find((item) => {
                   return (item.id == product.id)  
                 }).price}</h4>
                 <h4 className="cart-product-total">{props.products.find((item) => {
                   return (item.id == product.id)  
                 }).price * product.quantity}</h4>
               </div>)
              })}
            </div>
            <div className="receipt">
                <div className="subtotal-container">
                  <span className="subtotal-header">Subtotal</span>
                  <span className="subtotal">$500</span>
                </div> 
                <div className="total-price-container">
                  <span className="total-price-header">Total</span>
                <span className="total-price">$500</span>
                </div>
              </div>
          </div>
        </div>
        <div className="payment">
          <h4>Payment Info</h4>
          <button className="cart-icon open"><i className="material-icons md-48 open">monetization_on</i></button>
        </div>
    </div>
    
  )
}


export function CheckoutForm() {
  return (
    <div></div>
  )
}
