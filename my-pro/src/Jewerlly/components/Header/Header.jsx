import React from 'react'
import './header.css'
import necklce from '../../../img/Necklaces.webp'
import Ears from '../../../img/Ears.webp'
import ring from '../../../img/ring.webp'
import bracel from '../../../img/braclets.webp'
import jewerlly from '../../../img/jewerlly.webp'
import worker from '../../../img/work.avif'
export default function Header() {
  return (
    <div>
      <div className="title__jewerlly">
        <p className='title__text'>Jewelry & Accessories</p>
        <p className='title__products'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab.</p>
        <img src={necklce} alt="" className='title__img1'/>
        <img src={Ears} alt="" className='title__img2'/>
        <img src={ring} alt="" className='title__img3'/>
        <img src={bracel} alt="" className='title__img4'/>
        <img src={jewerlly} alt="" className='title__img5'/>
        <img src={worker} alt="" className='title__img6'/>
      </div>
    </div>
  )
}