var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  slidesIndex = n;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function takeMeThere(n) {
  /* about tutoring: */
  /* if (n=1) {  };*/
  /* testimonials: */
  /* if (n=2) {  };*/
  /* my qualifications: */
  /* if (n=3) {  };*/
  /* contact me: */
  /* if (n=4) {  };*/
}
