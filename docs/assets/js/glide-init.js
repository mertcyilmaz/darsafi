// glide-init.js
// Initialize Glide.js slider/carousel
// Requires Glide.js library to be included in your HTML
// https://glidejs.com/

// Example usage:
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.core.min.css">
// <script src="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/glide.min.js"></script>
// <script src="assets/js/glide-init.js"></script>
// <div class="glide">
//   <div class="glide__track" data-glide-el="track">
//     <ul class="glide__slides">
//       <li class="glide__slide">Slide 1</li>
//       <li class="glide__slide">Slide 2</li>
//       <li class="glide__slide">Slide 3</li>
//     </ul>
//   </div>
//   <div class="glide__arrows" data-glide-el="controls">
//     <button class="glide__arrow glide__arrow--left" data-glide-dir="<">Prev</button>
//     <button class="glide__arrow glide__arrow--right" data-glide-dir=">">Next</button>
//   </div>
// </div>

document.addEventListener('DOMContentLoaded', function() {
  if (typeof Glide !== 'undefined') {
    var carousels = document.querySelectorAll('.glide');
    carousels.forEach(function(carousel) {
      new Glide(carousel, {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        gap: 16,
        autoplay: 4000,
        hoverpause: true,
        animationDuration: 800
      }).mount();
    });
  } else {
    console.warn('Glide.js library not found. Please include it before glide-init.js');
  }
});
