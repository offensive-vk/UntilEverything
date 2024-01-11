// Function to calculate age and update the display
function calculateAge() {
    // Prompt user for birth year
    const birthYear = prompt("Enter your birth year (YYYY):");

    if (!birthYear || isNaN(birthYear)) {
        alert("Invalid input. Please enter a valid year.");
        return;
    }

    // Function to update the display
    function updateDisplay() {
        const birthDate = new Date(birthYear, 0); // January 1st of the birth year
        const currentDate = new Date();

        const age = currentDate.getFullYear() - birthYear;

        document.getElementById('years').innerText = age + ' years';

        const months = age * 12;
        document.getElementById('months').innerText = months + ' months';

        const days = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24));
        document.getElementById('days').innerText = days + ' days';

        const hours = Math.floor((currentDate - birthDate) / (1000 * 60 * 60));
        document.getElementById('hours').innerText = hours + ' hours';

        const minutes = Math.floor((currentDate - birthDate) / (1000 * 60));
        document.getElementById('minutes').innerText = minutes + ' minutes';

        const seconds = Math.floor((currentDate - birthDate) / 1000);
        document.getElementById('seconds').innerText = seconds + ' seconds';

        const milliseconds = (currentDate - birthDate);
        document.getElementById('milliseconds').innerText = milliseconds + ' milliseconds';
    }
    // Call the updateDisplay function every 100 milliseconds
    setInterval(updateDisplay, 100);
}

// Call the calculateAge function on page load
document.addEventListener('DOMContentLoaded', calculateAge);

