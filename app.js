import { makeItYes } from './test/make-it-yes.js';

const button = document.getElementById('button');
const results = document.getElementById('results');

button.addEventListener('click', () => {
    const userName = prompt('Tell me your name');
    const userConfirm = confirm('Are you ready for a quiz?');
    if (!userConfirm) {
        alert('Come back when you\'re ready.');
        return;
    }
    let correctAnswers = 0;
    const firstQuestion = prompt(`${userName}, is Finn the human the main character of Adventure Time?`);
    if (makeItYes(firstQuestion)) {
        correctAnswers++;
    }
    const secondQuestion = prompt(`${userName}, is Adventure Time based in post-apocolyptic times?`);
    if (makeItYes(secondQuestion)) {
        correctAnswers++;
    }
    const thirdQuestion = prompt (`Last question ${userName}. Does Jake the dog hate Finn the human?`);
    if (!makeItYes(thirdQuestion)) {
        correctAnswers++;
    }
    results.textContent = `${userName}, you answered ${correctAnswers} questions correctly out of 3.`;
});

        // we need to track the STATE of their correct answers
