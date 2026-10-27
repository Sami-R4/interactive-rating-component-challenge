
const buttons = document.querySelectorAll('.btn-nums');
let btnSubmit = document.getElementById("btnSubmit");
let cardContent1 = document.querySelector('.card-contents-1');
let cardContent2 = document.querySelector('.card-contents-2');
let rating;
let ratingSpan = document.getElementById('rating');
let hasBeenRated = false;

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        buttons.forEach(b => {
            b.classList.remove('active'); 
        })
        
            this.classList.add('active');
            rating = this.textContent;
            hasBeenRated = true;
    })
})


    btnSubmit.addEventListener('click', function() {
        if(hasBeenRated) {
            cardContent1.style.display = "none";
            cardContent2.style.display = "flex";
            ratingSpan.innerHTML = rating;
        } else {
            alert("Please select a number first!!");
        }
});


