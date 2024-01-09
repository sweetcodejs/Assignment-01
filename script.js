

function ageClick() {
    var card1 = document.getElementById('card1');
    var card2 = document.getElementById('card2');

    var age = parseInt(document.getElementById('yourAge').value);

    if (age >= 18) {
        card1.classList.add('d-block');
        card1.classList.remove('d-none');
        card2.classList.add('d-none');
        card2.classList.remove('d-block');
    } else {
        card1.classList.add('d-none');
        card1.classList.remove('d-block');
        card2.classList.add('d-block');
        card2.classList.remove('d-none');
    }
}