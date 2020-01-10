const wes = document.querySelector('.wes');

wes.addEventListener('click', function(e) {
  //   console.log(e);
  console.log(`You clicked it!`);
  const shouldChangePage = confirm(
    `This website might be malicious!  Do you wish to proceed?`
  );
  if (!shouldChangePage) {
    e.preventDefault();
  }
  console.log(shouldChangePage);
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(e) {
  console.log(e);
  e.preventDefault();
});

function logEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
