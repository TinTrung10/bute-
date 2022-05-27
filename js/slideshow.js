let slideIndex = 0;
showSlide();

function showSlide() {
  let i;
  let slide = document.getElementsByClassName("mySlide");
  let dot = document.getElementsByClassName("dot");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slide.length) {slideIndex = 1}    
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" aktive", "");
  }
  slide[slideIndex-1].style.display = "block";  
  dot[slideIndex-1].className += " aktive";
  setTimeout(showSlide, 2000); // Change image every 2 seconds
}

// KILDE
// https://www.w3schools.com/howto/howto_js_slideshow.asp