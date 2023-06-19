import React from 'react'
import ring from '../../../img/ring.webp'
import './footer.css'
export default function Footer() {
  return (
    <div>
      <p className='title__number'>There's so much more for you to discover</p>
        <p className='buttons__number'>←  •••  ◯ ◯ ◯ ◯ ◯ ◯ ◯ ◯  •••  →</p>
        <h1>Recently viewed</h1>
        <div className="view__one">
        <img src={ring} alt="" className='ring' />
        <p className='ring__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ea!</p>
        </div>
        <div className="view__two">
        <img src={ring} alt="" className='ring' />
        <p className='ring__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ea!</p>
        </div>
        <div className="similar">
          <h2>Similar to recently viewed</h2>
          <img src={ring} alt="" className='ring1' />
            
          <img src={ring} alt="" className='ring' />
          
          <img src={ring} alt="" className='ring' />
          
          <img src={ring} alt="" className='ring' />

          <img src={ring} alt="" className='ring' />
        </div>
    </div>
  )
}
