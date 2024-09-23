const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

function sendEmail() {
    var email = document.getElementById("emailInput").value;
    
    Email.send({
      SecureToken: "ed88c9f2-be4e-4fb6-9651-4947ed6dbf7f ", // Dapatkan dari SMTP.js
      To: 'ilhamsetyaka14@email.com',
      From: "ilhamsetyaka14@gmail.com",
      Subject: "New Contact Form Submission",
      Body: "Email: " + email
    }).then(
      message => alert("Email sent successfully")
    );
  }