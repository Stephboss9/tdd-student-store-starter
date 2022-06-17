import * as React from "react"
import { Link } from "react-router-dom"
import companyLogo from "../../../Images/CodePath_Logo.webp"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
    <Link className  to ="/"><Logo /></Link> 
    <Link className = "link" to ="/"></Link> 
    <Link className = "link" to ="/"></Link> 
    <Link className = "link" to ="/"></Link> 
    <Link className = "link" to="/">Home</Link>
    <Link className = "link" to="/ShoppingCart">About Us</Link>
    <Link className = "link" to="">Contact Us</Link>
    <Link className = "link" to="">Buy Now</Link>
    </nav>
  )
}

export function Logo() {
  return (
    <div className="logo"><img src = {companyLogo} className = "logo-img"/></div>
  )
}

