// SELECT ELEMENTS ON THE PAGE - CANVAS, SHAKE BUTTON

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeBtn = document.querySelector('.shake');
const MOVE_AMOUNT = 20;

// SET UP OUR CANVAS FOR DRAWING
// const { width } = canvas;
// const { height } = canvas;
// console.log(width, height);
// USE DESTRUCTING INSTEAD FOR THIS:
const { width, height } = canvas;

// CREATE RANDOM STARTING POINT FOR CURSOR
// prettier was auto correcting these to const before we started using them - watch out for that :P
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;
// ADDING IN A HUE VARIATION FOR THE LINE USING HSL VALUES
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
// START THE DRAWING
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// WRITE A DRAW FUNCTION

function draw({ key }) {
  // INCREMENT THE HUE
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);
  //   MOVE OUR X AND Y VALUES DEPENDING ON WHAT THE USER DID
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// WRITE A HANDLER FOR THE KEYS

function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// CLEAR/SHAKE FUNCTION

function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      //   console.log('done the shake');
      canvas.classList.remove('shake');
    },
    // AUTOMATICALLY REMOVE THE EVENT LISTENER AFTER THE EVENT HAS RUN
    { once: true }
  );
}

// LISTEN FOR ARROW KEYS
window.addEventListener('keydown', handleKey);
shakeBtn.addEventListener('click', clearCanvas);
