// Slideshow functionality
const slideshow = document.getElementById("slideshow");
const images = ["images/gym1.jpg", "images/gym2.jpg", "images/gym3.jpg"];
let index = 0;

function displaySlideshow() {
    slideshow.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
}
setInterval(displaySlideshow, 3000);

// Form Validation
const form = document.getElementById("membershipForm");
form.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const county = document.getElementById("county").value;
    const zip = document.getElementById("zip").value;
    const terms = document.getElementById("terms").checked;

    if (!name || !email || !phone || !city || !state || !county || !zip || !terms) {
        alert("Please complete all fields and agree to the terms.");
        event.preventDefault();
        return;
    }

    // Zip code validation
    const zipPattern = /^[0-9]{5}$/;
    if (!zipPattern.test(zip)) {
        alert("Please enter a valid 5-digit zip code.");
        event.preventDefault();
    }
});


// Function to register a session with a trainer
function registerTrainer(trainerName) {
    const selectedDate = prompt(`Select a date to book a session with ${trainerName} (YYYY-MM-DD):`);
    if (selectedDate) {
        alert(`You have successfully registered a session with ${trainerName} on ${selectedDate}.`);
        // In a real-world scenario, this would send the booking data to a backend server.
    } else {
        alert("Booking cancelled. Please select a valid date.");
    }
}
