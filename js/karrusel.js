let slidesIndex = 1;
showSlides(slidesIndex);

function plusSlides(n) {
  showSlides(slidesIndex += n);
}

function currentSlide(n) {
  showSlides(slidesIndex = n);
}

function showSlides(n) {
  let x;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slidesIndex = 1}
  if (n < 1) {slidesIndex = slides.length}
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  for (x = 0; x < dots.length; x++) {
    dots[x].className = dots[x].className.replace(" activ", "");
  }
  slides[slidesIndex-1].style.display = "block";
  dots[slidesIndex-1].className += " activ";
}

// KILDE
// https://www.w3schools.com/howto/howto_js_slideshow.asp