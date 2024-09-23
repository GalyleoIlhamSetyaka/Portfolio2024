const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

function sendEmail() {
    var email = document.getElementById("emailInput").value;
    
    Email.send({
      SecureToken: "fbd88ae1-9ba1-420e-b649-6a0ef7054bf7", // Dapatkan dari SMTP.js
      To: 'ilhamsetyaka14@email.com',
      From: "ilhamsetyaka14@gmail.com",
      Subject: "New Contact Form Submission",
      Body: "Email: " + email
    }).then(
      message => alert(message)
    );
  }