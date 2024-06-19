let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Web Developer'],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1200,
    loop: true,
});

const form = document.querySelector('form');
const fn = document.querySelector('#fullname');
const email = document.querySelector('#email');
const phonenumb = document.querySelector('#phonenumber');
const subjectt = document.querySelector('#subject');
const mess = document.querySelector('#message');

function sendEmail() {
    const bodyMessage = `Full Name: ${fn.value} <br> Email: ${email.value},<br> Phone Number: ${phonenumb.value}<br> Message: ${mess.value}`;
    
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "rsmahajan222@gmail.com",
        Password: "180B8F7E4BC00598D1B700E732E0D8090273",
        To: "rsmahajan222@gmail.com",
        From: "rsmahajan222@gmail.com",
        Subject: subjectt.value,
        Body: bodyMessage
    }).then(
        message => {
            displayMessage('Thank you! Your message has been sent successfully.', 'success');
            form.reset(); 
        }
    ).catch(
        error => displayMessage('Error sending email. Please try again later.', 'error')
    );
}

function displayMessage(msg, type) {
    const messageBox = document.createElement('div');
    messageBox.className = `message-box ${type}`;
    messageBox.innerText = msg;
    document.body.appendChild(messageBox);
    setTimeout(() => {
        messageBox.remove();
    }, 3000);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});
