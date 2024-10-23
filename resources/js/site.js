 // Get references to the #Burger and #menu elements
 var burgerButton = document.getElementById('Burger');
 var closeButton = document.getElementById('Close');
 var menu = document.getElementById('menu');
 var navbar = document.getElementById('navbar');

 // Add a click event listener to the #Burger element
 burgerButton.addEventListener('click', function() {
   // Toggle the 'Hidden' class on the #menu element
   menu.classList.toggle('hidden')
   burgerButton.classList.toggle('hidden')
   closeButton.classList.toggle('hidden');
 });

 closeButton.addEventListener('click', function() {
   // Toggle the 'Hidden' class on the #menu element
   menu.classList.toggle('hidden')
   burgerButton.classList.toggle('hidden')
   closeButton.classList.toggle('hidden');
 });

document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    }

    document.querySelector('.next').addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    document.querySelector('.prev').addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    // Initialize the first slide
    showSlide(currentSlide);
});
