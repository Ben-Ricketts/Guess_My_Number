'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!!!🎉🎉🎉';

document.querySelector('.guess').value = 20;
*/

/*document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Hi KITTEN PIE!!';
});*/

let randomNumber = Math.trunc(Math.random() * 20) + 1;
//let score = sessionStorage.getItem('score') || 20;
let score = 20;
document.querySelector('.score').textContent = score;

//document.querySelector('.number').textContent = randomNumber;

let x = function () {
  const guessing = Number(document.querySelector('.guess').value);

  console.log(typeof guessing);

  if (!guessing) {
    document.querySelector('.message').textContent = '🚫 NO Number!';
  } else if (guessing === randomNumber) {
    document.querySelector('.message').textContent = 'Correct Number!!!🎉🎉🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    score++;
    document.querySelector('.score').textContent = score;
  } // player too high
  else if (guessing > randomNumber) {
    if (score < 1) {
      document.querySelector('.message').textContent = 'Number too high ☝️ ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log('you lose');
      document.querySelector('.message').textContent = 'you Lose ';
    }
  } else if (guessing < randomNumber)
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too low 👇 ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      console.log('you lose');
      document.querySelector('.message').textContent = 'you Lose ';
    }
};

let again = function () {
  sessionStorage.setItem('score', score);
  location.reload();
};

document.querySelector('.check').addEventListener('click', x);
document.querySelector('.again').addEventListener('click', again);

console.log(randomNumber);
console.log(score);
