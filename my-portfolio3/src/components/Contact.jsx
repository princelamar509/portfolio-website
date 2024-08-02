

import React, { useState } from 'react';
import './Contact.css';
import ScrollTrigger from './ScrollTrigger';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFormStatus('Please fill in all fields.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <ScrollTrigger>
      <h2>Contact Me</h2>
    <div id="contact" className="contact-section">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
    </ScrollTrigger>
    </section>
  );
};

export default Contact;