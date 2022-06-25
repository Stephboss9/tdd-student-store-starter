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
    <Logo />
    <div className="socials">
    <Link  to ="/"><img className ="icon" src = {twitter_icon}/></Link> 
    <Link  to ="/"><img className = "icon ig" src = {ig_icon}/></Link> 
    <Link  to ="/"><img className = "icon" src = {fb_icon}/></Link> 
    </div>
    <div className="nav-links">
    <a className = "link" href="#Home">Home</a>
    <a className = "link" href="#About">About Us</a>
    <a className = "link" href="#Contact">Contact Us</a>
    <Link className = "link" to="/purchases">Orders</Link>

    </div>
    
    </nav>
  )
}

export function Logo() {
  return (
    <div className="logo media"><Link to ="/"><img src = {companyLogo} className = "logo-img"/></Link></div> 
  )
}

