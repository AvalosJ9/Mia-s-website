const flower = document.querySelector('.flower');
const flowers = ['🌸', '🌷', '🌼', '🌺', '🌻'];
let currentFlower = 0;

if (flower) {
	flower.addEventListener('click', () => {
		currentFlower = (currentFlower + 1) % flowers.length;
		flower.textContent = flowers[currentFlower];
	});
}

function backgroundColor() {
	const colors = ['#f6a68c'];
} 

const orderForm = document.querySelector('#order-form');

if (orderForm) {
    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const data = new FormData(orderForm);
        const body = [
            `Name: ${data.get('name')}`,
            `Email: ${data.get('email')}`,
            `Flavor: ${data.get('flavor')}`,
            `Quantity: ${data.get('quantity')}`,
            `Preferred pickup date: ${data.get('pickupDate')}`,
            `Notes: ${data.get('notes') || 'None'}`
        ].join('\n');

        const subject = encodeURIComponent('Cake pop order');
        window.location.href =
            `mailto:happychocolatepops@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    });
}
