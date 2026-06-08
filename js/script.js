// Typing Effect

const texts = [
    "Web Developer",
    "Frontend Developer",
    "Operator Sekolah",
    "Python Programmer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;
            count++;

        }, 1500);

    }

    setTimeout(type, 120);

})();


// Scroll Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".hidden").forEach((el) => {

    observer.observe(el);

});