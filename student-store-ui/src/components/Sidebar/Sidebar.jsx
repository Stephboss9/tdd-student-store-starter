import * as React from "react"
import "./Sidebar.css"
import "../ShoppingCart/ShoppingCart.css"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

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
          {props.isOpen?<CheckoutForm receipt = {props.receipt} isOpen = {props.isOpen}  shoppingCart = {props.shoppingCart} checkoutForm = {props.checkoutForm} error = {props.error}
          setCheckoutForm = {props.setCheckoutForm} setShoppingCart = {props.setShoppingCart} setSubmitted = {props.setSubmitted} isSubmitted = {props.isSubmitted}
          handleOnCheckoutFormChange = {props.handleOnCheckoutFormChange} handleOnSubmitCheckoutForm = {props.handleOnSubmitCheckoutForm}/>:null}
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


