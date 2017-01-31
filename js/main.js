function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var items = document.querySelectorAll("#ablauf li");
var navbar = document.querySelector("nav");
var helper = document.querySelector("#helper");
 
// code for the isElementInViewport function
 
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
  if (!isElementInViewport(helper)) {
  	navbar.classList.add("attached");
  } else {
  	navbar.classList.remove("attached");
  	}
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

