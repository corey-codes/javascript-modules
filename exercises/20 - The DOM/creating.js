// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

const myParagraph = document.createElement('p');
myParagraph.textContent = `I am a P`;
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.classList.add('newImage');
myImage.src = 'https://picsum.photos/200';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

// =======================================
// PRACTICE
// CREATE A UL WITH 5 LI'S
// THIS IS JUST FOR PRACTICE, THERE ARE EASIER WAYS TO DO THIS
// =======================================

const myList = document.createElement('ul');
myList.classList.add('specialList');
console.log(myList);

const li = document.createElement('li');

const item2 = document.createElement('li');
item2.classList.add('specialItem');
item2.textContent = 'Two';
console.log(item2);

const item3 = document.createElement('li');
item3.classList.add('specialItem');
item3.textContent = 'Three';
console.log(item3);

myList.appendChild(item2);
myList.appendChild(item3);
document.body.appendChild(myList);

const item4 = document.createElement('li');
item4.classList.add('specialItem');
item4.textContent = 'Four';
console.log(item4);

const item5 = item4.cloneNode(true);
item5.classList.add('specialItem');
item5.textContent = 'Five';
// console.log(item5);

const item1 = document.createElement('li');
item1.classList.add('specialItem');
item1.textContent = 'One';
console.log(item1);

myList.insertAdjacentElement('afterbegin', item1);

myList.insertAdjacentElement('beforeend', item4);

myList.insertAdjacentElement('beforeend', item5);
