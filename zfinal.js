const basket = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.item');
        const itemName = item.getAttribute('data-name');
        const itemPrice = parseFloat(item.getAttribute('data-price'));

        const existingItem = basket.find(zerish => zerish.name === itemName);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            basket.push({
                name: itemName,
                price: itemPrice,
                quantity: 1
            });
        }

        updateCart();
    });
});

function updateCart() {
    const element = document.querySelector('.cart-items')
    const totalPriceElement = document.getElementById('total-price');

    console.log(totalPriceElement)
    element.innerHTML = '';
    let totalPrice = 0;

    basket.forEach((item, index) => {
        const cartAcafi = document.createElement('div');
        cartAcafi.className = 'cart-item';
        cartAcafi.innerHTML = `
            <p>Food: ${item.name}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: ${item.price * item.quantity}</p>

        `;

        element.appendChild(cartAcafi);
        totalPrice += item.price * item.quantity;
    }
    )

    totalPriceElement.innerHTML = totalPrice
}

// Cancel all items
document.getElementById('cancel-all').addEventListener('click', () => {
    basket.length = 0;
    updateCart();
});


// Place order
document.getElementById('place-order').addEventListener('click', () => {
    if (basket.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert(`Order placed! Total: $${document.getElementById('total-price').textContent}`);
        basket.length = 0;
        updateCart();
    }
});
