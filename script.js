function updateProfile() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Logic to update the profile
    console.log(`Profile Updated: ${name}, ${email}, ${password}`);
    alert('Profile updated successfully!');
}

function submitQuery() {
    const query = document.getElementById('query').value;

    // Logic to submit the query
    console.log(`Query Submitted: ${query}`);
    alert('Your query has been submitted!');
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Logic to handle login
    console.log(`Login Attempt: ${email}, ${password}`);
    alert('Login successful!');
}
