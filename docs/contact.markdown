---
layout: default
title: Contact
---

<section id="contact" class="section">
    <h2>Contact Me</h2>
    <form id="contact-form" action="https://formspree.io/f/mjvndlej" method="POST" onsubmit="return validateForm()">
    <div class="form-group">
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
        <label for="email">Your Email:</label>
        <input type="email" id="email" name="email" class="input-field">
    </div>
    
    <div class="form-group">
        <label for="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
    </div>
    
    <button type="submit">Send Message</button>
    </form>
</section>
