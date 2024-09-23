const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const action = form.action;

    fetch(action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Email sent successfully');
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert('Oops! There was a problem submitting your form');
                }
            });
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form');
    });
});