import React, { useEffect } from 'react'
import axios from 'axios'
import "./Order.css"

export default function Orders(props) {

    useEffect(() => {
       props.handleOnPastPurchases()
    },[])
  return (
    <div className = "orders-grid-container">
        <h2 className = "orders-title">Past Transactions</h2> 
         <div className="orders-grid">
       
       {
         props.pastOrders.map((currentPurchase, index) => {
          return (<OrderCard purchase = {currentPurchase} orderNumber = {index+1}/>)
        })
       }
       
      </div>
    
    </div>
  )
}


export function OrderCard(props) {
    return (
      <div className="orders-card">
       {
         <div className="order-card">
            <div className = "order-wrapper">
            <h2 className = "order-info-title">Order#: {props.orderNumber}</h2>
            <div className = "order-info">
                <div className="main-info">
                <p className = "order-name">Name: {props.purchase.name}</p>
                <p className= "order-email">Email: {props.purchase.email}</p>
                <p className='order-time'>Time: {props.purchase.createdAt}</p>
                <p className='total-items'>Quantity: {props.purchase.totalItems}</p>
                <p className='order-total'>Total: ${props.purchase.total}</p>
                </div>             
            </div>
            </div>
            
        </div>
       }
       
      </div>
    )
  }
  
