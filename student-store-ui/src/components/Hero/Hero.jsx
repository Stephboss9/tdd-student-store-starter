import React from 'react'
import heroIcon from "../../../Images/student_store_icon.18e5d61a.svg"
import "./Hero.css"
export default function Hero() {
  return (
    <div className = "hero">
        <div className = "intro">
            <h1>Welcome!</h1>
            <h1>Find Your Merch!</h1>
            <p className = "description">We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
        </div>
        <div className=' hero-img-container'><img className = "hero-img" src={heroIcon}/></div>
    </div>
  )
}
