import React from 'react'
import './Chefs.css'

const Chefs = () => {
  return (
    <div className='main'>
       <div class="section-title">
        <h2>Let's meet the expert.</h2>
    </div>
    <div class="chefs-container">
        <div class="chef-box">
            <div class="image-wrapper">
               <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free//images/Expert/girl.png" alt="Senior Chef" />
                <div class="linkedin">in</div>
            </div>
            <h3>Shoo Thar Mien</h3>
            <p>Senior Chef</p>
        </div>
        <div class="chef-box">
            <div class="image-wrapper" >
               <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free//images/Expert/girl.png" alt="Junior Chef" />
                <div class="linkedin">in</div>
            </div>
            <h3>Shoo Thar Mien</h3>
            <p>Junior Chef</p>
        </div>
        <div class="chef-box">
            <div class="image-wrapper">
                <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free//images/Expert/boytwo.svg" alt="Senior Chef" />
                <div class="linkedin">in</div>
            </div>
            <h3>Shoo Thar Mien</h3>
            <p>Senior Chef</p>
        </div>
    </div>

    </div>
  )
}

export default Chefs
