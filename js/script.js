
const buttons = document.querySelectorAll('.btn-nums');
let btnSubmit = document.getElementById("btnSubmit");
let cardContent1 = document.querySelector('.card-contents-1');
let cardContent2 = document.querySelector('.card-contents-2');
let rating;
let ratingSpan = document.getElementById('rating');

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        buttons.forEach(b => {
            b.classList.remove('active'); 
        })
        
            this.classList.add('active');
            rating = this.textContent;
    })
})


btnSubmit.addEventListener('click', function() {
    cardContent1.style.display = "none";
    cardContent2.style.display = "flex";
    ratingSpan.innerHTML = rating;
})
