import React from 'react'
import giant_codepath from "../../../Images/giant_codepath_Logo.svg"
import "./About.css"

export default function About() {
  return (
   <div className='about-section' id = "About"> 
       <h1 className='about-intro'>About Us</h1>
        <div className='about-main'>
            <div className='about-info'>
                <p className='about-description'>The codepath student store offers great products at great prices from a great team and for a great cause.
                </p>
                <p className='about-description'>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
                <p className='about-description'>All proceeds go towards bringing high quality CS education to college students around the country.</p>
            </div>
            <div className='image-container'>
                <img className = "codepath-image" src = {giant_codepath}></img>
            </div>

        </div>
   </div>

    )
}
