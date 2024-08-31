
  //  ERROR MESSAGE CODE

const inputField = document.getElementById('inputField');
const submitButton = document.getElementById('submitButton');
const errorMessage = document.getElementById('errorMessage');

inputField.addEventListener('input', function () {
    if (inputField.value.length >= 24) {
        submitButton.disabled = false;
        errorMessage.style.display = 'none';
    } else {
        submitButton.disabled = true;
        errorMessage.style.display = 'block';
    }
});

submitButton.addEventListener('click', function () {
    if (inputField.value.length < 24) {
        errorMessage.style.display = 'block';
    } else {
        window.location.href = 'http://127.0.0.1:3000/pi%20network/html/send.html';
    }
});

