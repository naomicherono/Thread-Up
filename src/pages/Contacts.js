// Contacts.js

import React from 'react';
import './Contacts.css'

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="contacts-content">
        <h1>Contact Us</h1>
        <p>
          We're here to assist you with any questions, concerns, or feedback you may have.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <h2>Email</h2>
            <p>
              You can reach us via email at <a href="mailto:info@threadup.com">info@threadup.com</a>.
            </p>
          </div>
          <div className="contact-item">
            <h2>Phone</h2>
            <p>
              Our customer support is available 24/7. Feel free to call us at <a href="tel:+123456789">+1 (2547) 123-567-89</a>.
            </p>
          </div>
          <div className="contact-item">
            <h2>Address</h2>
            <p>
              Visit our store at:<br />
              123 Ngong Road,<br />
              Nairobi, Kenya 
            </p>
          </div>
        </div>
        <div className="social-media">
          <h2>Connect With Us</h2>
          <p>
            Follow us on social media for the latest updates and promotions:
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/threadup" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/threadup" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagram-icon.png" alt="Instagram" />
            </a>
            <a href="https://www.twitter.com/threadup" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter-icon.png" alt="Twitter" />
            </a>
          </div>
        </div>
        
        {/* Feedback Form */}
        <form className="feedback-form">
          <h2>Give Us Feedback</h2>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Feedback" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
