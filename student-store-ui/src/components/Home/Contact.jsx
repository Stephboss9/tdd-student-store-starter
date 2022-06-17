import React from 'react'
import "./Contact.css"
import happy_person from "../../../Images/happy_person.svg"

export default function Contact() {
  return (
    <div className='contact-container'>
        <h1 className='contact-header'>Contact Us</h1>
        <div className='contact-section'>
            <div className='contact-info'>
                <ul>
                    <li className='contact-piece'>
                        <span>Email:</span>
                        <span>code@path.org</span>
                         </li>
                    <li className='contact-piece'>
                        <span>Phone:</span>
                        <span>1-800-CODEPATH</span>
                        </li>
                    <li className='contact-piece'>
                        <span>Address:</span>
                        <span>123 Fake Street, San Francisco, CA</span>
                        </li>
                    <li className='contact-piece'>
                        <span>Socials:</span>
                        </li>
                </ul>
            </div>
            <div className='contact-image'><img className='happy-img' src={happy_person}></img></div>
        </div>
    </div>
  )
}
