var submitButton = document.querySelector('#submit-button');
var box = document.querySelector('#box');
var boxcontentthanks = document.querySelector('#box-content-thanks');
var ratings = document.querySelectorAll('.botao-rating')
var ratingValue = document.getElementById('rating-span');

function submit() {
    box.style.display = "none";
    boxcontentthanks.style.display = "block";
}

ratings.forEach((rate) => {
    rate.addEventListener("click", () => {
        ratingValue.innerHTML = rate.innerHTML;
    })
})