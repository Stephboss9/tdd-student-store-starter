import * as React from "react"
import play_icon from "../../../Images/play_store_icon.svg"
import app_icon from "../../../Images/app_store_icon.svg"
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
        <div className= "top">
            <div className = "footer-column">
            <ul>
            <h4 className="footer-header">Categories</h4>
            <li className = "list-item">All Categories</li>
            <li className = "list-item">Clothing</li>
            <li className = "list-item">Food</li>
            <li className = "list-item">Accessories</li>
            <li className = "list-item">Tech</li>
                </ul>
            </div>
       
       <div className="footer-column">
        <ul>
            <h4 className="footer-header">Company</h4>
            <li className = "list-item">About Us</li>
            <li className = "list-item">Find a Store</li>
            <li className = "list-item">Terms</li>
            <li className = "list-item">Sitemap</li>
            <li className = "list-item">Careers</li>
            </ul>
       </div>
     
        <div className="footer-column">
        <ul >
            <h4 className="footer-header">Support</h4>
            <li className = "list-item">Contact Us</li>
            <li className = "list-item">Mony Refund</li>
            <li className = "list-item">Order Status</li>
            <li className = "list-item">Shipping Info</li>
            <li className = "list-item">Open Dispute</li>
            </ul>
        </div>

        <div className="footer-column">
        <ul >
             <h4 className="footer-header">Account</h4>
            <li className = "list-item">Login</li>
            <li className = "list-item">Register</li>
            <li className = "list-item">Account Setting</li>
            <li className = "list-item">My Orders</li>
            <li className = "list-item"></li>
        </ul>
        </div>
       
        <div className="footer-column">
        <ul >
            <h4 className="footer-header">Socials</h4>
            <li className = "list-item">Facebook</li>
            <li className = "list-item">Twitter</li>
            <li className = "list-item">Linkedin</li>
            <li className = "list-item">Instagram</li>
            <li className = "list-item">Youtube</li>
        </ul>
        </div>

        <div className="footer-column">
        <ul>
            <h4 className="footer-header">Our App</h4>
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
