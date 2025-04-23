
document.querySelectorAll('.add-to-cart').forEach(buttun => {
    buttun.addEventListener('click', () => {
        const hostElement = buttun.closest('.item');
        const itemName = hostElement.getAttribute('data-name');
        const itemPrice = hostElement.getAttribute('data-price');

        alert(`u prees ${itemName} and this price is ${itemPrice}`)

    })
})