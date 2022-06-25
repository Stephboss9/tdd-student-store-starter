import React from 'react'
import "./Contact.css"
import happy_person from "../../../Images/happy_person.svg"

export default function Contact() {
  return (
    <div className='contact-container' id = "Contact">
        <h1 className='contact-header'>Contact Us</h1>
        <div className='contact-section'>
            <div className='contact-info'>
                <ul className='contact-list'>
                    <li className='contact-piece '>
                        <span className=' email'>Email:</span>
                        <span>code@path.org</span>
                         </li>
                    <li className='contact-piece'>
                        <span className='phone'>Phone:</span>
                        <span>1-800-CODEPATH</span>
                        </li>
                    <li className='contact-piece'>
                        <span className=' address'>Address:</span>
                        <span>123 Fake Street, San Francisco, CA</span>
                        </li>
                </ul>
            </div>
            <div className='contact-image'><img className='happy-img' src={happy_person}></img></div>
        </div>
    </div>
  )
}
