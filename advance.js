let cart = [];
console.log(typeof (cart))
// Add to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const itemElement = button.closest('.item');
        const itemName = itemElement.getAttribute('data-name');
        const itemPrice = parseFloat(itemElement.getAttribute('data-price'));

        const existingItem = cart.find(item => item.name === itemName);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                name: itemName,
                price: itemPrice,
                quantity: 1
            });
        }

        updateCart();
    });
});

function updateCart() {
    const cartItemsElement = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsElement.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <div class="quantity-controls">
                <button class="decrease" data-index="${index}">-</button>
                <span>${item.quantity}</span>
                <button class="increase" data-index="${index}">+</button>
                <button class="delete-item" data-index="${index}">🗑️</button>
            </div>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartItemsElement.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);

    // Add event listeners to new buttons
    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                cart.splice(index, 1);
            }
            updateCart();
        });
    });

    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            cart[index].quantity += 1;
            updateCart();
        });
    });

    document.querySelectorAll('.delete-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            cart.splice(index, 1);
            updateCart();
        });
    });
}

// Cancel all items
document.getElementById('cancel-all').addEventListener('click', () => {
    cart = [];
    updateCart();
});

// Place order
document.getElementById('place-order').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert(`Order placed! Total: $${document.getElementById('total-price').textContent}`);
        cart = [];
        updateCart();
    }
});