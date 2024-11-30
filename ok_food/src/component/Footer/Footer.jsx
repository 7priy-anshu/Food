import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-con">
        <div className="left">
     <img src={assets.logo} alt="" />
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, tempore reprehenderit. Vel ducimus accusantium esse modi id eveniet consequatur reprehenderit nulla, natus facere. Ab ratione aliquam incidunt labore architecto in! <br/>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, impedit pariatur nobis molestiae illo ipsum facilis beatae ab, repellat veritatis omnis odio iusto voluptatem eligendi reprehenderit illum sequi deserunt. Laboriosam.</p>
 
     <div className="social-icon">
      <img src={assets.facebook_icon} alt="" />
      <img src={assets.twitter_icon} alt="" />
      <img src={assets.linkedin_icon} alt="" />

     </div>
        </div>
        <div className="center">
<h2>COMPANY</h2>
<ul>
  <li>HOME</li>
  <li>ABOUT-US</li>
  <li>DELIVERY</li>
  <li>PRIVACY POLICY</li>
</ul>
        </div>
        <div className="left">
 <h2>GET IN TOUCH</h2>
 <ul>
  <li>+91 8503869336</li>
  <li>contact @priyanshu.com</li>
 </ul>
        </div>
      </div>
      <hr />
      <p className='copy'>Copyright 2024 @ priyanshu.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer