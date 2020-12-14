var menu = true;
function openNav() {
  if (menu == true) {
    document.getElementById("aside").style.transform = "translate(0, 0)";
    menu = false;
  } else if (menu == false) {
    document.getElementById("aside").style.transform = "translate(100vw, 0)";
    menu = true;
  }
}
