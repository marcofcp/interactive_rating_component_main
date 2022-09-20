var submitButton = document.querySelector('#submit-button');
var box = document.querySelector('#box');
var boxcontentthanks = document.querySelector('#box-content-thanks');
var ratings = document.querySelectorAll('.button-rating')
var ratingValue = document.getElementById('rating-span');

/* Display and Hide content according to submit button */

function submit() {
    box.style.display = "none";
    boxcontentthanks.style.display = "block";
}

/* Code that runs on each .button-rating and change result span html */

ratings.forEach((rate) => {
    rate.addEventListener("click", () => {
        ratingValue.innerHTML = rate.innerHTML;
    })
})