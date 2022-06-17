import * as React from "react"
import play_icon from "../../../Images/play_store_icon.svg"
import app_icon from "../../../Images/app_store_icon.svg"
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
        <div className= "top">
            <div className = "footer-column">
            <h4>Categories</h4>
            <ul>
            <li>All Categories</li>
            <li>Clothing</li>
            <li>Food</li>
            <li>Accessories</li>
            <li>Tech</li>
                </ul>
            </div>
       
       <div className="footer-column">
        <ul>
            <li>Company</li>
            <li>About Us</li>
            <li>Find a Store</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Careers</li>
            </ul>
       </div>
     
        <div className="footer-column">
        <ul >
            <li>Support</li>
            <li>Contact Us</li>
            <li>Mony Refund</li>
            <li>Order Status</li>
            <li>Shipping Info</li>
            <li>Open Dispute</li>
            </ul>
        </div>

        <div className="footer-column">
        <ul >
             <li>Account</li>
            <li>Login</li>
            <li>Register</li>
            <li>Account Setting</li>
            <li>My Orders</li>
            <li></li>
        </ul>
        </div>
       
        <div className="footer-column">
        <ul >
            <li>Socials</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Youtube</li>
        </ul>
        </div>

        <div className="footer-column">
        <ul>
            <li>Our App</li>
            <li><img src={app_icon}/></li>
            <li><img src = {play_icon}/></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        </div>
        </div>
    </div>
  )
}
