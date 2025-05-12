// Select DOM elements for food order
const foodForm = document.getElementById('food-form');
const foodTotal = document.getElementById('food-total');
const foodMessage = document.getElementById('food-message');
const orderFoodBtn = document.getElementById('order-food-btn');

// Food prices
const foodPrices = {
    popcorn: 5,
    soda: 3,
    nachos: 7,
    candy: 2,
};

// Calculate total food cost
function calculateFoodTotal() {
    let total = 0;
    for (const food in foodPrices) {
        const quantity = document.getElementById(food).value;
        total += foodPrices[food] * quantity;
    }
    foodTotal.textContent = total;
}

// Update food total on input change
foodForm.addEventListener('input', calculateFoodTotal);

// Handle food order button click
orderFoodBtn.addEventListener('click', () => {
    const totalCost = parseInt(foodTotal.textContent, 10);
    if (totalCost === 0) {
        alert('Please select at least one food item to order.');
        return;
    }

    // Display success message
    foodMessage.style.display = 'block';

    // Hide success message after 3 seconds
    setTimeout(() => {
        foodMessage.style.display = 'none';
    }, 3000);
});