// Simulated credentials for demonstration purposes
const validUsername = 'kreddy';
const validPassword = 'Pavani@123';
const validCompanyCode = 'POT-01';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve user input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const companyCode = document.getElementById('companyCode').value;

    // Basic validation
    if (username === '' || password === '' || companyCode === '') {
        showModal('Please fill in all fields.', 'error');
        return;
    }

    // Simulate authentication process
    if (username === validUsername && password === validPassword && companyCode === validCompanyCode) {
        showModal('Login successful!', 'success');
        // Show a welcome message
        setTimeout(() => {
            showWelcomeMessage();
            // Redirect to another page or perform additional actions
            setTimeout(() => {
                window.location.href = 'dashboard.html'; // Example redirect
            }, 2000); // Delay to allow the user to see the success message
        }, 1000); // Delay to show the success message before the welcome message
    } else {
        showModal('Invalid username or password.', 'error');
    }
});

// Function to display a modal
function showModal(message, type) {
    const modal = document.createElement('div');
    modal.className = `modal ${type}`;
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(modal);

    // Close the modal when clicking on the close button
    modal.querySelector('.close').addEventListener('click', function() {
        modal.remove();
    });

    // Close the modal after 3 seconds if it’s a success message
    if (type === 'success') {
        setTimeout(() => {
            modal.remove();
        }, 300000); // Duration to show the message
    }
}

// Function to display the welcome message
function showWelcomeMessage() {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'welcome-message';
    welcomeDiv.innerHTML = `<h1>Welcome to PROJECTONTRACK</h1>`;
    document.body.appendChild(welcomeDiv);

    // Remove the welcome message after a delay
    setTimeout(() => {
        welcomeDiv.remove();
    }, 300000); // Duration to show the welcome message
}
