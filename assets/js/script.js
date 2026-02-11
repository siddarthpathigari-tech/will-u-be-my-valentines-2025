// Preloader
let messagePhase = 1;

const preloader = document.querySelector('.preloader');
const button_next = document.querySelector('.next');
const message = document.querySelector('.message');

button_next.addEventListener('click', () => {

    messagePhase++;

    if (messagePhase == 2) {
        message.textContent = "I have something to ask you...";
    }

    if (messagePhase == 3) {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 600);
    }

});


// Main Section
const button_area = document.querySelector('.buttons-area');
const button_no = document.querySelector('.answer-no');
const button_yes = document.querySelector('.answer-yes');
const image = document.querySelector('.content-image');
const question = document.querySelector('.question');

let imagePhase = 1;


// NO button hover
button_no.addEventListener('mouseover', () => {
    imagePhase++;

    if (imagePhase > 6) imagePhase = 6;

    changeImage();
});

button_no.addEventListener('mouseout', () => {
    backImage();
});


function changeImage() {

    image.classList.add('fade');

    setTimeout(() => {

        image.src = `assets/images/content-pics/img-${imagePhase + 1}.jpg`;

        const texts = [
            "",
            "Please no... don't say no!",
            "Don't break my heart...",
            "You're my only hope...",
            "Please... I need you...",
            "I'll be the best Valentine ever!",
            "You're my everything ❤️"
        ];

        question.textContent = texts[imagePhase] || "";

        image.classList.remove('fade');

    }, 200);
}


function backImage() {

    image.classList.add('fade');

    setTimeout(() => {

        image.src = 'assets/images/content-pics/img-1.jpg';
        question.textContent = "Will you be my valentine?";

        image.classList.remove('fade');

    }, 200);
}


// YES button click
button_yes.addEventListener('click', () => {

    image.classList.add('fade');

    button_area.innerHTML = `
        I choose you. Today. Tomorrow. Always ❤️<br><br>
        Happy Valentine's Day Sunandhini 🫂
    `;

    question.textContent = "She said YES ❤️";

    setTimeout(() => {
        image.src = 'assets/images/content-pics/img-8.jpg';
        image.classList.remove('fade');
    }, 200);

});
