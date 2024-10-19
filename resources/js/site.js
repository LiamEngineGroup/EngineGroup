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
   const slides = document.querySelectorAll('.slide');
   let currentSlide = 0;
   const slideInterval = 7000; // 7 seconds between slides

   // Function to show the current slide
   function showSlide(index) {
       slides.forEach((slide, i) => {
           if (i === index) {
               slide.classList.add('active');
           } else {
               slide.classList.remove('active');
           }
       });
   }

   // Next button functionality
   document.getElementById('next').addEventListener('click', function() {
       currentSlide = (currentSlide + 1) % slides.length; // Move forward in slides
       showSlide(currentSlide);
   });

   // Previous button functionality
   document.getElementById('prev').addEventListener('click', function() {
       currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Move backward in slides
       showSlide(currentSlide);
   });

   // Auto-rotation every 3 seconds
   setInterval(function() {
       currentSlide = (currentSlide + 1) % slides.length;
       showSlide(currentSlide);
   }, slideInterval);

   // Display the first slide initially
   showSlide(currentSlide);
});
