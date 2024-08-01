function openMenu() {
  document.getElementById("mobile-navigation").style.right = "0";
  document.getElementById("openMenu").style.display = "none";
  document.getElementById("closeMenu").style.display = "block";
  // document.getElementById("dim-backg").style.opacity = "0.5";
  // document.getElementById("dim-backg").style.display = "block";
  // document.getElementById("dim-backg").style.transition = ".3s ease all";
  // document.body.style.overflowY = "hidden";
  document.documentElement.style.overflowY = "hidden";
}

function closeMenu() {
  document.getElementById("mobile-navigation").style.right = "-400px";
  // document.getElementById("dim-backg").style.opacity = "0";
  // document.getElementById("dim-backg").style.display = "none";
  document.getElementById("openMenu").style.display = "block";
  document.getElementById("closeMenu").style.display = "none";
  document.documentElement.style.overflowY = "unset";
}

//disable scrolling
