---
layout: default
title: Contact
---

<section id="contact" class="section">
    <div class="container">
        <h2>Contact Me</h2>
        <form id="contact-form" action="https://formspree.io/f/mjvndlej" method="POST" onsubmit="return validateForm()">
            <div class="form-group">
                <label for="name">Your Name:</label>
                <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="email">Your Email:</label>
                <input type="email" id="email" name="email" class="input-field" required>
            </div>
            
            <div class="form-group">
                <label for="message">Your Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            
            <button type="submit">Send Message</button>
        </form>
    </div>
</section>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@1.16.1/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="{{ '/assets/js/scripts.js' | relative_url }}"></script>
