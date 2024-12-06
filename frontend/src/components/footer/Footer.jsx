//import React from 'react';
import './footer.css'
import { assets } from './../../assets/assets';
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                   <img src={assets.logo_2} alt="" />
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius, explicabo rem velit iste magnam reiciendis ad sed labore voluptate voluptates odit, provident vero. Repudiandae soluta cum sed fugiat sapiente!</p>
                   <div className="footer-social-icons">
                      <img src={assets.facebook_icon} alt="" />
                      <img src={assets.twitter_icon} alt="" />
                      <img src={assets.linkedin_icon} alt="" />
                   </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delevary</li>
                        <li>Privecy & Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>01817844031</li>
                        <li>zahidnubcse@gmail.com</li>
                    </ul>
                </div>
                 
             </div>
             <hr/>
            <p className="footer-copyright">Copyright 2024 © FoodieFly.com - All Right Reserved.</p>
        </div>
    );
};

export default Footer;