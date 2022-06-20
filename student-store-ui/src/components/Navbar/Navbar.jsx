import * as React from "react"
import { Link } from "react-router-dom"
import companyLogo from "../../../Images/codepath-transparent.png"
import "./Navbar.css"
import twitter_icon from "../../../Images/twitter_icon.png"
import ig_icon from "../../../Images/ig_icon.png"
import fb_icon from "../../../Images/facebook_icon.png"


export default function Navbar() {
  return (
    <nav className="navbar">
   <div className="logo"><Logo /></div> 
    <div className="socials">
    <Link  to ="/"><img className ="icon" src = {twitter_icon}/></Link> 
    <Link  to ="/"><img className = "icon ig" src = {ig_icon}/></Link> 
    <Link  to ="/"><img className = "icon" src = {fb_icon}/></Link> 
    </div>
    <div className="nav-links">
    <Link className = "link" to="/">Home</Link>
    <Link className = "link" to="/ShoppingCart">About Us</Link>
    <Link className = "link" to="">Contact Us</Link>
    <Link className = "link" to="">Buy Now</Link>
    </div>
    
    </nav>
  )
}

export function Logo() {
  return (
    <Link className  to ="/"><img src = {companyLogo} className = "logo-img"/></Link>
  )
}

