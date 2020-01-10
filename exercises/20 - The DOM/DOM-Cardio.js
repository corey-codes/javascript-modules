// Make a div

const myDiv = document.createElement('div');

// add a class of wrapper to it

myDiv.classList.add('wrapper');

// put it into the body

document.body.appendChild(myDiv);

// make an unordered list

const myList = document.createElement('ul');

// add three list items with the words "one, two three" in them

const item1 = document.createElement('li');
item1.classList.add('listItem');
item1.innerText = 'One';
const item2 = document.createElement('li');
item2.classList.add('listItem');
item2.innerText = 'Two';
const item3 = document.createElement('li');
item3.classList.add('listItem');
item3.innerText = 'Three';

// put that list into the above wrapper
myList.appendChild(item1);
myList.appendChild(item2);
myList.appendChild(item3);
myDiv.appendChild(myList);

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

const width = 250;
const src = `https://picsum.photos/${width}`;
const alt = `Cute Puppy`;

const newImage = `
    <div class='imgContainer'>
        <img src="${src}" alt="${alt}" class='cute'/>
    </div>
`;

const newImageContainer = document
  .createRange()
  .createContextualFragment(newImage);

myDiv.appendChild(newImageContainer);

// with HTML string, make a div, with two paragraphs inside of it

const secondDiv = `
    <div class=newDiv>
        <p>This is the first paragraph</p>
        <p>This is the second paragraph</p>
    </div>
`;

// put this div before the unordered list from above

// const newParagraphs = document
//   .createRange()
//   .createContextualFragment(secondDiv);
// console.log(newParagraphs);

myList.insertAdjacentHTML('beforebegin', secondDiv);

// add a class to the second paragraph called warning
// remove the first paragraph

const newDiv = myDiv.querySelector('.newDiv');
newDiv.children[1].classList.add('warning');
newDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const playerHTML = `
  <div class='playerCard'>
    <h2>${name} - ${age}</h2>
    <p>Their height is ${height}cm and ${age} years old.  In Dog years this person would be ${age *
    7}.  That would be a tall dog.</p>
    <button class="deleteBtn" type="button">Delete</button>
  </div>
  `;
  return playerHTML;
}

// make a new div with a class of cards

const newSecondDiv = document.createElement('div');
newSecondDiv.classList.add('cards');
document.body.appendChild(newSecondDiv);

// Have that function make 4 cards

let cardsHTML = generatePlayerCard('Corey', 1, 174);
cardsHTML += generatePlayerCard('Andrea', 2, 150);
cardsHTML += generatePlayerCard('Sarah', 3, 100);
cardsHTML += generatePlayerCard('Anna', 4, 110);

// append those cards to the div

newSecondDiv.innerHTML = cardsHTML;

// put the div into the DOM just before the wrapper element

myDiv.insertAdjacentElement('beforebegin', newSecondDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.deleteBtn');

// make out delete function

function deleteCard(event) {
  console.log(event.currentTarget);
  const clickedBtn = event.currentTarget;
  clickedBtn.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
