import React from 'react'
import "./CheckoutForm.css"
export default function CheckoutForm(props) {

    return (
      <div className="checkout-form">
          <div className="form-wrapper">
            <form className="form-fields">
              <span className="input-1-header">Email</span>
              <input className="checkout-form-input" type="email" name = "email" placeholder = "student@codepath.org" value = {props.checkoutForm.email} onChange = {(event) => {
                props.handleOnCheckoutFormChange(event.target.name, event.target.value)}}>
              </input>
              
            
              <span className="input-2-header">Name</span>
              <input className="checkout-form-input" type="text" name = "name" placeholder = "Student Name" value = {props.checkoutForm.name} onChange = {(event) => 
                {props.handleOnCheckoutFormChange(event.target.name, event.target.value)}}>
              </input>
            </form>
          </div>
          <button className="checkout-button" onClick = { () => {
              try {
                
                props.handleOnSubmitCheckoutForm()
                props.setShoppingCart([])
                props.setCheckoutForm({name:"", email:""})
                props.setSubmitted(true)
              }
              catch (error) {
             
                props.setSubmitted(false)
              }}}>Checkout </button>
              <div className = "response">
                {props.isSubmitted && props.error === null?<span className = "success">Success!</span>:null}
                {props.error !=null? <span className = "error">{props.error}</span>:null}

              </div>
              <div className='receipt'>
              {props.receipt === null?null:props.receipt.map((String) => {
                  return (<p className = "receipt-text">{String}</p>)
                })}
              </div>
      </div>
    )
  }
  