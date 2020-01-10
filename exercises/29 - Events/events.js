/* THREE BASIC PARTS OF AN EVENT
 1. GO GET SOMETHING (butts)
 2. LISTEN FOR SOMETHING (CLICK)
 3. DO SOMETHING (FUNCTION) 
 
 THIS EVENT HANDLER USES AN ANONYMOUS FUNCTION - AND THIS FUNCTION IS ONLY AVAIL INSIDE THIS EVENT LISTENER
 const butts = document.querySelector('.butts');
 butts.addEventListener('click', function() {
   console.log('it was clicked!');
  });

  BUT YOU CAN ALSO USED NAMED FUNCTIONS IF YOU WANT THE FUNCTION TO BE REUSED IN OTHER AREAS OF YOUR CODE:
*/

function handleClick() {
  console.log('IT WAS CLICKED!!');
}

const butts = document.querySelector('.butts');
const coolBtn = document.querySelector('.cool');
const hooray = () => console.log('hooray!');
const buyButtons = document.querySelectorAll('button.buy');
console.log(buyButtons);

butts.addEventListener('click', handleClick);
coolBtn.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

// LISTEN ON MULTIPLE BUTTONS

function handleBuyButtonClick(event) {
  console.log(`You're buying it!`);
  const button = event.target;
  // console.log(parseFloat(button.dataset.price));

  // PROPAGATION EXAMPLES
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // STOP PROAGATION - STOP THIS EVENT FROM BUBBLING UP
  // event.stopPropagation();
}

window.addEventListener(
  'click',
  function(event) {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
    // event.stopPropagation();
  },
  { capture: true }
);

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

// function buyItem() {
//   console.log('BUYING THIS!');
// }

// function attachListener(buyButton) {
//   console.log('Binding the buy button');
//   buyButton.addEventListener('click', buyItem);
//   console.log('Binding the buy button!!');
// }

// buyButtons.forEach(attachListener);

// YOU CAN ALSO USE FAT ARROW FUNCTIONS FOR THE EVENT LISTNER, BUT YOU WON'T BE ABLE TO REMOVE OR UNBIND IT LATER IF YOU NEED TO
// buyButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     console.log('You clicked it!');
//   });
// });

// =======================================
//
//
// const butts = document.querySelector('.butts');
// const coolButton = document.querySelector('.cool');

// function handleClick() {
//   console.log('🐛 IT GOT CLICKED!!!');
// }

// const hooray = () => console.log('HOORAY!');

// butts.addEventListener('click', function() {
//   console.log('Im an anon!');
// });
// coolButton.addEventListener('click', hooray);

// butts.removeEventListener('click', handleClick);

// // Listen on multiple items
// const buyButtons = document.querySelectorAll('button.buy');

// function handleBuyButtonClick(event) {
//   console.log('You clicked a button!');
//   const button = event.target;
//   // console.log(button.textContent);
//   // console.log(parseFloat(event.target.dataset.price));
//   console.log(event.target);
//   console.log(event.currentTarget);
//   console.log(event.target === event.currentTarget);
//   // Stop this event from bubbling up
//   // event.stopPropagation();
// }

// buyButtons.forEach(function(buyButton) {
//   buyButton.addEventListener('click', handleBuyButtonClick);
// });

// window.addEventListener(
//   'click',
//   function(event) {
//     console.log('YOU CLICKED THE WINDOW');
//     console.log(event.target);
//     console.log(event.type);
//     // event.stopPropagation();
//     console.log(event.bubbles);
//   },
//   { capture: true }
// );

// const photoEl = document.querySelector('.photo');

// photoEl.addEventListener('mouseenter', e => {
//   console.log(e.currentTarget);
//   console.log(this);
// });
