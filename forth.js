const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const hostElement = button.closest('.item');
        const itemName = hostElement.getAttribute('data-name');
        const itemPrice = hostElement.getAttribute('data-price');

        const existing = cart.find(findname => findname.name == itemName);

        if (existing) {
            existing.quantity += 1;
        }
        else {
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
    const orderElement = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price')

    let tPrice = 0;
    orderElement.innerHTML = '';


    cart.forEach((item) => {
        const newspace = document.createElement('div');
        newspace.className = 'cart-item';
        newspace.innerHTML = `
            <p>Food: ${item.name}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: ${item.price * item.quantity}</p>

        `;
        orderElement.appendChild(newspace);

        tPrice += item.price * item.quantity
    });

    totalPriceElement.textContent = tPrice;
}
