import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div>
        <div className="newsletter-container">
      <div className="newsletter-content">
        <h5>NEWSLETTER</h5>
        <h2>Subscribe our newsletter.</h2>
        <div className="newsletter-input-container">
          <input type="email" placeholder="@ enter your email-address" />
          <button>
            <span>&#10132;</span>
          </button>
        </div>
      </div>
      <div className="newsletter-image">
        <img src="https://media.istockphoto.com/id/1468860049/photo/fitness-woman-eating-a-healthy-poke-bowl-in-the-kitchen-at-home.jpg?s=612x612&w=0&k=20&c=XDY46BP4RgFqq27GjLYbrAhIUnz3rkKXlu0axO-N39A=" alt="Dish" />
      </div>
    </div>
      
    </div>
  )
}

export default Subscribe
