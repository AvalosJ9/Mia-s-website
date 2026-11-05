// This will allow website to be more interactive
const flower = document.querySelector('.flower');
const flowers = ['🌸', '🌷', '🌼', '🌺', '🌻'];
let currentFlower = 0;

flower.addEventListener('click', () => {
	currentFlower = (currentFlower + 1) % flowers.length;
	flower.textContent = flowers[currentFlower];
});
