const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

function sendEmail(event) {
    event.preventDefault();
    
    var email = document.getElementById("emailInput").value;
    var message = document.getElementById("messageInput").value;
    
    Email.send({
        SecureToken: "d1b02966-189b-4253-85f2-b623ae30dc6d ", // Dapatkan token dari https://smtpjs.com/
        To: 'ilhamsetyaka14@gmail.com',
        From: email,
        Subject: "Pesan baru dari Portfolio Website",
        Body: message
    }).then(
        message => alert("Pesan terkirim sukses!")
    );
}