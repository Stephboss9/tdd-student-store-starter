import * as React from "react"
import "./Sidebar.css"
import { useEffect } from "react"
import "../ShoppingCart/ShoppingCart.css"
import "../Checkout/Checkout.css"

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
          {props.isOpen?<CheckoutForm/>:null}
        </div>
    </section >
  )
}


export function ShoppingCart(props) {
  let getSubTotal = () => {
    let subTotal = 0
    props.shoppingCart.map(current => {
      subTotal += (props.products.find((item) => {
        return (item.id == current.itemId)  
      }).price*current.quantity)
    })
    return subTotal
  }

  let getTotalTax = () => {
    let tax = (getSubTotal() * .0875)
    return tax
  }

  let getTotalCost = ()=> {
    let subTotal = getSubTotal()
    let total = subTotal + (subTotal*.0875) 
    return (total)
  }

  return (
    <div className="shopping-cart hidden">
      <div className="shopping-intro">
        <h4 className="shopping-cart-header">Shopping Cart</h4>
        <button className="cart-icon open"><i className="material-icons md-48 open">add_shopping_cart</i></button>
      </div>
        {props.shoppingCart.length === 0? <h4 className="no-items">No items added to shopping cart yet. Start shopping now!</h4>:
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
                   return (item.id == product.itemId)  
                 }).name}</h4>
                 <h4 className="cart-product-quantity">{product.quantity}</h4>
                 <h4 className="cart-product-price">${props.products.find((item) => {
                   return (item.id == product.itemId)  
                 }).price}</h4>
                 <h4 className="cart-product-total">${(props.products.find((item) => {
                   return (item.id == product.itemId)  
                 }).price*product.quantity).toFixed(2)}</h4>
               </div>)
              })}
            </div>
            <div className="receipt">
                <div className="subtotal-container">
                  <span className="subtotal-header">Subtotal</span>
                  <span className="subtotal">${getSubTotal().toFixed(2)}</span>
                </div> 
                <div className="total-tax-container">
                  <span className="total-tax-header">Tax</span>
                <span className="total-tax">${getTotalTax().toFixed(2)}</span>
                </div>
                <div className="total-price-container">
                  <span className="total-price-header">Total</span>
                <span className="total-price">${getTotalCost().toFixed(2)}</span>
                </div>
              </div>
          </div>
        </div>}
        <div className="payment">
          <h4>Payment Info</h4>
          <button className="cart-icon open"><i className="material-icons md-48 open">monetization_on</i></button>
        </div>
    </div>
    
  )
}


export function CheckoutForm(props) {

  return (
    <div className="checkout-form">
        <div className="form-wrapper">
          <h4 className="checkout-title">Checkout</h4>
          <form className="form-fields">
            <span className="input-1-header">Email</span>
            <input className="checkout-form-input" type="email" name = "email" placeholder = "student@codepath.org">
            </input>
            <span className="input-2-header">Name</span>
            <input className="checkout-form-input" type="text" name = "name" placeholder = "Student Name">
            </input>
          </form>
         <button className="checkout-button"><i className="material-icons checkout">checkout</i> </button>
        </div>
    </div>
  )
}
