import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-subheading">We'd love to hear from you! Please fill out the form below.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="form-input" required />
        <input type="email" placeholder="Your Email" className="form-input" required />
        <textarea placeholder="Your Message" className="form-textarea" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
