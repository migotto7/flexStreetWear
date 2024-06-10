let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    console.log("current", currentIndex)
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

//showSlide(currentIndex);
