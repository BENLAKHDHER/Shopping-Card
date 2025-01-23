// Get the total price element
const totalPriceElement = document.querySelector('.total');

// Get the quantity elements
const quantityElements = document.querySelectorAll('.quantity');

// Get the unit price elements
const unitPriceElements = document.querySelectorAll('.unit-price');

// Get the plus and minus buttons
const plusButtons = document.querySelectorAll('.fa-plus-circle');
const minusButtons = document.querySelectorAll('.fa-minus-circle');

// Get the delete buttons
const deleteButtons = document.querySelectorAll('.fa-trash-alt');

// Get the favorite heart buttons
const favoriteHeartButtons = document.querySelectorAll('.fa-heart');

// Initialize the total price
let totalPrice = 0;

// Function to update the total price
function updateTotalPrice() {
    totalPrice = 0;
    quantityElements.forEach((quantityElement, index) => {
        const quantity = parseInt(quantityElement.textContent);
        const unitPrice = parseFloat(unitPriceElements[index].textContent.replace('$', ''));
        totalPrice += quantity * unitPrice;
    });
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Add event listeners to the plus and minus buttons
plusButtons.forEach((plusButton, index) => {
    plusButton.addEventListener('click', () => {
        const quantityElement = quantityElements[index];
        const currentQuantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = currentQuantity + 1;
        updateTotalPrice();
    });
});

minusButtons.forEach((minusButton, index) => {
    minusButton.addEventListener('click', () => {
        const quantityElement = quantityElements[index];
        const currentQuantity = parseInt(quantityElement.textContent);
        if (currentQuantity > 0) {
            quantityElement.textContent = currentQuantity - 1;
            updateTotalPrice();
        }
    });
});

// Add event listeners to the delete buttons
deleteButtons.forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
        const cardBody = deleteButton.parentNode.parentNode.parentNode;
        cardBody.remove();
        updateTotalPrice();
    });
});

// Add event listeners to the favorite heart buttons
favoriteHeartButtons.forEach((favoriteHeartButton) => {
    favoriteHeartButton.addEventListener('click', () => {
        if (favoriteHeartButton.classList.contains('fas')) {
            favoriteHeartButton.classList.remove('fas');
            favoriteHeartButton.classList.add('far');
        } else {
            favoriteHeartButton.classList.remove('far');
            favoriteHeartButton.classList.add('fas');
        }
    });
});