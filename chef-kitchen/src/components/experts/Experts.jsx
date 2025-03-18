import React from 'react'
import './Experts.css'

const Experts = () => {
  return (
    <div className='experts-main'>
   <div className='experts-one'>
   <div className='experts-header'>
    <h1>
    Cook anything with the experts
    </h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam</p>

   </div>
   <div className='experts-buttons'>
    <p>Lets cook</p>
    <p>Explore now</p>
   </div>
   </div>
   <div className='experts-img-one'>
   <div className='experts-img'>
    <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/hero/banner-image.png" alt="" />
   
   </div>
   <div className='experts-two'>
   <img src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/hero/pizza.svg" alt="" />
   <p>more then 500+ recipes. </p>
   </div>
   </div>
    </div>
  )
}

export default Experts
