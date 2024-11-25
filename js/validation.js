function validateContactForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address');
        return false;
    }
    if (!phone.match(phonePattern)) {
        alert('Please enter a valid phone number');
        return false;
    }
    alert('Form submitted successfully!');
    return true;
}
