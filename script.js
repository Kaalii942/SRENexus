// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (name && email && message) {
            alert('Thank you for your message, ' + name + '! We will get back to you soon.');
            form.reset();
        } else {
            alert('Please fill out all fields before submitting the form.');
        }
    });
});




/* JavaScript Logic */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Optionally, validate form fields here if required

        // Redirect to the main home page
        window.location.href = 'index.html';
    });
});
