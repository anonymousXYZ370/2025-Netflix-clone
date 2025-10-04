const container1 = document.querySelector('#container1');
const container2 = document.querySelector('#container2');
const container3 = document.querySelector('#container3');
const container4 = document.querySelector('#container4');
const container5 = document.querySelector('#container5');
const container6 = document.querySelector('#container6');

function toggleAnswer(num) {
    const answer = document.querySelector(`#ans${num}`);
    const question = document.querySelector(`#ques${num}`);
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        question.innerHTML = `<span>${question.textContent}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#ffffff" fill="none">
            <path d="M12 4V20M20 12H4" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>`;
    } else {
        answer.style.display = 'block';
        question.innerHTML = `<span>${question.textContent}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#ffffff" fill="none">
            <path d="M12 4V20M20 12H4" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>`;
    }
}