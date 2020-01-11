console.log('IT WORKS!');

// FUNCTION FOR SCROLL TO ACCEPT
// CHECK IF THERE ARE TERMS ON THE PAGE, IF NO THEN STOP FUNCTION, ELSE, RUN FUNCTION

// function scrollToAccept() {
//   const terms = document.querySelector('.terms-and-conditions');
//   if (!terms) {
//     return; // quit, there isn't any terms on page
//   }
//   terms.addEventListener('scroll', function(e) {
//     console.log(e);
//   });
// }
// scrollToAccept();

const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function observerCallBack(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    console.log('removing disabled');
    //   observer.unobserve(terms.lastElementChild);
  } else {
    button.disabled = true;
  }
}

const observer = new IntersectionObserver(observerCallBack, {
  root: terms,
  threshold: 1,
});

observer.observe(terms.lastElementChild);

// terms.addEventListener('scroll', function(e) {
//   console.log(e.currentTarget.scrollTop);
//   console.log(e.currentTarget.scrollHeight);
// });
