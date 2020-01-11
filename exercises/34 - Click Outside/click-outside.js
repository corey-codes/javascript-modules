const cardBtns = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardBtnClick(e) {
  console.log('Ya clicked the  button!');
  const button = e.currentTarget;
  const card = button.closest('.card');
  console.log(card);
  // GRAB THE IMAGE SRC INFO
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;

  // POPULATE THE MODAL WITH THE NEW INFO
  modalInner.innerHTML = `
    <img width='600' height='600' src='${imgSrc.replace(
      '200',
      '600'
    )}' alt='${name}'/>
    <p>${desc}</p>
    `;

  // SHOW THE MODAL
  modalOuter.classList.add('open');
}

cardBtns.forEach(button => {
  button.addEventListener('click', handleCardBtnClick);
});

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(e) {
  console.log(e.target);
  console.log(e.currentTarget);
  const isOutside = !e.target.closest('.modal-inner');
  console.log(isOutside);
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
