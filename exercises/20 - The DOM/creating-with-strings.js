const item = document.querySelector('.item');

const width = 350;
const src = `https://picsum.photos/${width}`;
const desc = `Cute pup`;
const myHTML = `
  <div class="wrapper">
    <h2>Cute, ${desc}</h2>
    <img src="${src}" alt="${desc}" class="new"/>
  </div> 
`;

// TURN A STRING INTO A DOM ELEMENT
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);

console.log(myFragment.querySelector('img'));

document.body.appendChild(myFragment);

// item.innerHTML = myHTML;
// console.log(item.innerHTML);

// const itemImage = document.querySelector('.wrapper img');
// console.log(itemImage);

// itemImage.classList.toggle('round');
