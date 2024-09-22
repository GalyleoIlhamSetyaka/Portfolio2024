const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

function sendEmail(event) {
    event.preventDefault();
    var email = document.getElementById("emailInput").value;
    
    Email.send({
      SecureToken: "YOUR_SECURE_TOKEN", // Dapatkan dari SMTP.js
      To: 'your@email.com',
      From: "your@elasticemail.com",
      Subject: "New Contact Form Submission",
      Body: "Email: " + email
    }).then(
      message => alert("Email sent successfully")
    );
  }