document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('submitBtn').addEventListener('click', function(event) {
        event.preventDefault();
    
        if (validateForm()) {
            displayMessage();
        }
    });
});

function validateForm() {
    let isValid = true;

    const firstName = document.getElementById('fname');
    if (!firstName.value.trim()) {
        alert('Please enter your first name.');
        isValid = false;
    }

    const lastName = document.getElementById('lname');
    if (!lastName.value.trim()) {
        alert('Please enter your last name.');
        isValid = false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = document.getElementById('email');
    
    if (!email.value.trim()) {
      alert('Please enter a valid email address.');
      isValid = false;
    } else {
      if (!emailRegex.test(email.value.trim())) {
        alert('Please enter a valid email address.');
        isValid = false;
      }
    }

    return isValid;
}

function displayMessage() {

    var firstName = document.getElementById('fname').value;
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    var lastName = document.getElementById('lname').value;
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    const email = document.getElementById('email').value;

    const message ="Thanks for contacting us " + 
    lastName + " " + firstName + ". We have send the details to your " + email + " account";

    document.getElementById("userOutput").textContent = message;
}

const objects = document.querySelectorAll('.object');
const boxes = document.querySelectorAll('.container-box');

objects.forEach(object => {
    object.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

boxes.forEach(box => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    box.addEventListener('drop', (e) => {
        e.preventDefault();
        const objectId = e.dataTransfer.getData('text/plain');
        const draggedObject = document.getElementById(objectId);
        const textElement = box.querySelector('.container-text');

        if (box.id === `box${objectId.charAt(objectId.length - 1)}`) {
            box.appendChild(draggedObject);
            if (textElement) {
                textElement.remove(); 
            }
            checkGameCompletion();
        } else {
            alert('Wrong container! Try again.');
        }
    });
});

function checkGameCompletion() {
    const objectsInBoxes = Array.from(boxes).map(box => box.children[0]);
    const isGameComplete = objectsInBoxes.every(object => object !== null);
   
    if (isGameComplete) {
        alert('You are doing right!');
    }
}

let search = document.querySelector(".search");
let clear = document.querySelector(".clear");
search.onclick = function(){
    document.querySelector(".containers").classList.toggle('active');
}
clear.onclick = function(){
    document.getElementById("search").value = "";
}
