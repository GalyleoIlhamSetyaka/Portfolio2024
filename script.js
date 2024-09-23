const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

function sendEmail() {
    var email = document.getElementById("emailInput").value;
    
    Email.send({
      Host: "smtp.elasticemail.com",
      SecureToken: "fbd88ae1-9ba1-420e-b649-6a0ef7054bf7",
      Password: "2BCAAE2DA78A7A765298E56E3C93C2EE72A3F07B0F6329B0730F05631E10C94FDFBACB9BC85338295F2C8498B0C574E8",
      To: 'ilhamsetyaka14@email.com',
      From: "ilhamsetyaka14@gmail.com",
      Subject: "New Contact Form Submission",
      Body: "Email: " + email
    }).then(
      message => alert(message)
    );
  }