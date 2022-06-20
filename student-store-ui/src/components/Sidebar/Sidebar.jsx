import * as React from "react"
import "./Sidebar.css"

export default function Sidebar() {

  const handleOnToggle = ()=> {
    let sidebar = document.querySelector(".sidebar");
    let toggleBtn = document.querySelector(".toggle-button")
    sidebar.classList.toggle("open")
    toggleBtn.classList.toggle("open")
    let collection = document.querySelector(".sidebar").children;
    let cartInfo = document.querySelector(".cart-info")
    cartInfo.classList.toggle("hidden")
    let ShoppingCart = document.querySelector(".shopping-cart")
    ShoppingCart.classList.toggle("hidden")

  }

  return (
    <section className="sidebar closed">
        <div className = "wrapper">
          <button className="toggle-button" onClick={handleOnToggle}>
            <i className= "material-icons md-48">arrow_forward</i>
          </button>
          <div className="cart-info">
            <button className="cart-icon"><i className="material-icons md-48">add_shopping_cart</i></button>
            <button className="cart-icon"><i className="material-icons md-48">monetization_on</i></button>
            <button className="cart-icon"><i className="material-icons md-48">fact_check</i></button>
          </div>
          <ShoppingCart/>
        </div>
    </section >
  )
}


export function ShoppingCart() {
  return (
    <div className="shopping-cart hidden">
      <div className="shopping-intro">
        <h4 className="shopping-cart-header">Shopping Cart</h4>
        <button className="cart-icon open"><i className="material-icons md-48 open">add_shopping_cart</i></button>
      </div>
        <h4 className="no-items">No items added to shopping cart yet. Start shopping now!</h4>
        <div className="table-row">

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
