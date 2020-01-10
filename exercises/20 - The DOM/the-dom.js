// const p = document.querySelector('p');
// console.log(p);
// const imgs = document.querySelectorAll('.item img');
// console.log(imgs);
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// console.log(item2);
// const heading = document.querySelector('h2');
// // heading.textContent = 'I am learning JavaScript';
// console.dir(heading.textContent);
// console.log(heading.innerText);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // ADDING TEXT TO AN EXISTING ELEMENT
// pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// // THIS IS THE BETTER WAY TO ADD ON TEXT TO AN ELEMENT
// // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
// // https://developer.mozilla.org/en-US/docs/Web/API/Element
// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');

// WORKING WITH CLASSES

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'cute Pup'; // setter
pic.width = 200;
console.log(pic.alt); // getter

// pic.setAttribute('alt', 'Really, really cute puppy');

console.log(pic.naturalWidth);
// IF YOUR CONSOLE LOG IS FIRIING BEFORE THE IMAGE IS LOADED, YOU CAN PUT IT IN AN EVEN LISTENER TO WAIT FOR THE PIC OR THE WINDOW TO LOAD
pic.addEventListener('load', function() {
  console.log(pic.naturalWidth);
});

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
