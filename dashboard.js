document.addEventListener('DOMContentLoaded', function() {
    // Get the popup and the close button
    const popup = document.getElementById('welcomePopup');
    const closeButton = document.querySelector('.popup .close');

    // Show the popup when the page loads
    popup.style.display = 'flex';

    // Close the popup when the close button is clicked
    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Optionally, you can also close the popup if the user clicks outside of the popup content
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }

        document.addEventListener('DOMContentLoaded', function() {
            const logoutButton = document.getElementById('logoutButton');
        
            logoutButton.addEventListener('click', function(event) {
                event.preventDefault();

                window.location.href = 'login.html'; // Replace 'login.html' with your actual login page URL or route
    });
});
