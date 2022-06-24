import React from 'react'
import "./CheckoutForm.css"
export default function CheckoutForm(props) {

    return (
      <div className="checkout-form">
          <div className="form-wrapper">
            <form className="form-fields">
              <span className="input-1-header">Email</span>
              <input className="checkout-form-input" type="email" name = "email" placeholder = "student@codepath.org" value = {props.checkoutForm.email} onChange = {props.handleOnCheckoutFormChange}>
              </input>
            
              <span className="input-2-header">Name</span>
              <input className="checkout-form-input" type="text" name = "name" placeholder = "Student Name" value = {props.checkoutForm.name} onChange = {props.handleOnCheckoutFormChange}>
              </input>
            </form>
          </div>
          <button className="checkout-button" onClick = { () => {
              try {
                props.handleOnSubmitCheckoutForm()
                props.setShoppingCart([])
                props.setCheckoutForm({name:"", email:""})
                console.log("good job my boi")
                props.setSubmitted(true)
              }
              catch (error) {
                console.log("keep debugging my boi")
                console.log(error)
                props.setSubmitted(false)
              }}}>Checkout </button>
              <div className = "response">
                {props.isSubmitted && props.error === null?<span className = "success">Success!</span>:null}
                {props.error !=null? <span className = "error">There was an error getting things submitted. Did you provide a name/email and somes items to buy</span>:null}

              </div>
              <div className='receipt'>
              {props.receipt === null?null:props.receipt.map((String) => {
                  return (<p className = "receipt-text">{String}</p>)
                })}
                {console.log(props.receipt)}
              </div>
      </div>
    )
  }
  