
const movieSelect = document.getElementById('movie-select');
const screenSelect = document.getElementById('screen-select');
const seats = document.querySelectorAll('.seat:not(.occupied)');
const ticketCount = document.getElementById('ticket-count');
const totalPrice = document.getElementById('total-price');
const selectedScreen = document.getElementById('selected-screen');
const confirmBtn = document.getElementById('confirm-btn');
const nextPageBtn = document.getElementById('next-page-btn');
const confirmationMessage = document.getElementById('confirmation-message');




let ticketPrice = +movieSelect.value;
// Select DOM elements
// Select DOM elements

function updateSummary() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    ticketCount.textContent = selectedSeatsCount;
    totalPrice.textContent = selectedSeatsCount * ticketPrice;
}

// Handle seat click
seats.forEach((seat) => {
    seat.addEventListener('click', () => {
        if (!seat.classList.contains('occupied')) {
            seat.classList.toggle('selected');
            updateSummary();
        }
    });
});

// Handle movie selection change
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSummary();
});

// Update selected screen in the summary
screenSelect.addEventListener('change', (e) => {
    selectedScreen.textContent = `Screen ${e.target.value}`;
});

// Handle Confirm Booking button click
confirmBtn.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    if (selectedSeats.length === 0) {
        alert('Please select at least one seat before confirming your booking.');
        return;
    }

    if (!screenSelect.value) {
        alert('Please select a screen before confirming your booking.');
        return;
    }

    // Display confirmation message
    confirmationMessage.style.display = 'block';

    // Disable further seat selection
    selectedSeats.forEach((seat) => {
        seat.classList.remove('selected');
        seat.classList.add('occupied');
    });

    // Reset summary
    ticketCount.textContent = 0;
    totalPrice.textContent = 0;

    // Hide confirmation message after 3 seconds
    setTimeout(() => {
        confirmationMessage.style.display = 'none';
    }, 3000);
});


// Handle navigation to the second page
nextPageBtn.addEventListener('click', () => {
    window.location.href = 'confirmation.html'; // Replace with the actual second page URL
});// Select DOM elements
const paymentMethod = document.getElementById('payment-method');
const cardDetails = document.getElementById('card-details');
const paypalDetails = document.getElementById('paypal-details');
const paymentForm = document.getElementById('payment-form');
const paymentMessage = document.getElementById('payment-message');


// Show/hide payment details based on selected method
paymentMethod.addEventListener('change', (e) => {
    const method = e.target.value;

    if (method === 'credit-card' || method === 'debit-card') {
        cardDetails.style.display = 'block';
        paypalDetails.style.display = 'none';
    } else if (method === 'paypal') {
        cardDetails.style.display = 'none';
        paypalDetails.style.display = 'block';
    } else {
        cardDetails.style.display = 'none';
        paypalDetails.style.display = 'none';
    }
});

// Handle payment form submission
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate payment processing
    setTimeout(() => {
        paymentMessage.style.display = 'block';

        // Hide payment message after 3 seconds
        setTimeout(() => {
            paymentMessage.style.display = 'none';
        }, 3000);
    }, 1000);
});