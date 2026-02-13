const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const resultDiv = document.getElementById('result');

// Birden fazla kabul edilen isim
const secretCodes = ['maciej', 'maciek'];

const nextPageUrl = 'main.html';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userInput = codeInput.value.trim().toLowerCase();

    if (secretCodes.includes(userInput)) {
        resultDiv.innerHTML = 'Witaj!';
        window.location.href = nextPageUrl;
    } else {
        resultDiv.innerHTML = 'Wrong Answer, try again!';
    }
});