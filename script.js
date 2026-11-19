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

//Add an event
if (orderForm) {
    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();

        //Get the form data 
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

        const confirmation = new URLSearchParams({
            name: data.get('name') || '',
            flavor: data.get('flavor') || '',
            quantity: data.get('quantity') || '',
            pickupDate: data.get('pickupDate') || 'Not selected'
        });

        window.setTimeout(() => {
            window.location.href = `thank-you.html?${confirmation.toString()}`;
        }, 1200);
    });
}

const confirmationName = document.querySelector('#confirmation-name');

if (confirmationName) {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const flavor = params.get('flavor');
    const quantity = params.get('quantity');
    const pickupDate = params.get('pickupDate');

    confirmationName.textContent = name ? `Thank you, ${name}!` : 'Thank you!';
    document.querySelector('#confirmation-flavor').textContent = flavor || 'Not selected';
    document.querySelector('#confirmation-quantity').textContent = quantity || 'Not selected';
    document.querySelector('#confirmation-pickup').textContent = pickupDate || 'Not selected';
}

