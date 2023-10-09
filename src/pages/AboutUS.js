// AboutUs.js

import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container my-3 py-3">
      <h1 className="about-us-h1">About Us</h1>
      <hr className="about-us-hr" />
      <p className="about-us-lead">
      
          Welcome to Thread Up, your one-stop destination for all your fashion needs.
        
          At Thread Up, we believe that fashion is a form of self-expression, and
          we're here to help you find the perfect style that suits your unique taste.
        
          Our journey started with a passion for fashion and a vision to provide
          a wide variety of fashion styles that appeal to different people.
        
          What sets us apart is not only our diverse fashion collections but also
          our commitment to delivering fashion with fast and secure delivery services.
        
          Whether you're looking for trendy streetwear, elegant evening wear,
          or comfortable everyday clothing, we've got you covered.
        
          Thank you for being a part of the Thread Up community. We're excited
          to be part of your fashion journey.
        
          Explore our collections and start expressing yourself through fashion today!
        
      </p>

      <h2 className="about-us-h2">Our Products</h2>
      <div className="about-us-products">
        <div className="about-us-product">
          <div className="about-us-card">
            <img className="about-us-card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
            <div className="about-us-card-body">
              <h5 className="about-us-card-title text-center">Men's Clothing</h5>
            </div>
          </div>
        </div>
        <div className="about-us-product">
          <div className="about-us-card">
            <img className="about-us-card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
            <div className="about-us-card-body">
              <h5 className="about-us-card-title text-center">Women's Clothing</h5>
            </div>
          </div>
        </div>
        <div className="about-us-product">
          <div className="about-us-card">
            <img className="about-us-card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
            <div className="about-us-card-body">
              <h5 className="about-us-card-title text-center">Jewelry</h5>
            </div>
          </div>
        </div>
        <div className="about-us-product">
          <div className="about-us-card">
            <img className="about-us-card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
            <div className="about-us-card-body">
              <h5 className="about-us-card-title text-center">Electronics</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
