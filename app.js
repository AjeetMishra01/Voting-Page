// Get all radio buttons with the name 'vote'
const radioButtons = document.getElementsByName('vote');

// Get the message element
const messageElement = document.querySelector('.message');

// Function to update the message text
function updateMessage() {
    // Check if any radio button is selected
    let isSelected = false;
    radioButtons.forEach(button => {
        if (button.checked) {
            isSelected = true;
        }
    });

    // Update the message based on selection
    if (isSelected) {
        messageElement.innerText = 'Click to Vote';
    } else {
        messageElement.innerText = 'Please select any one of the above candidates !!';
    }

    messageElement.style.display = 'block'; // Ensure the message is visible
}

// Initially set the message to the default text
messageElement.innerText = 'Please select any one of the above candidates !!';

// Add event listeners to each radio button
radioButtons.forEach(button => {
    button.addEventListener('change', updateMessage);
});
