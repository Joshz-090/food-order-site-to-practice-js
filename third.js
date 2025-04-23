const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const hostElement = button.closest('.item');
        const itemName = hostElement.getAttribute('data-name');
        const itemPrice = hostElement.getAttribute('data-price');

        alert(`You pressed ${itemName} and the price is ${itemPrice}.
        
Now it will be added under your order!
        `);

        cart.push({
            name: itemName,
            price: itemPrice,
            quantity: 1
        });

        updateCart();
    });
});

function updateCart() {
    const orderElement = document.querySelector('.cart-items');

    orderElement.innerHTML = '';

    cart.forEach((item) => {
        const newspace = document.createElement('div');
        newspace.className = 'cart-item';
        newspace.innerHTML = `
            <p>Food: ${item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
        `;
        orderElement.appendChild(newspace);
    });
}
