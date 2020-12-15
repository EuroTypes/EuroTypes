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

function page(pageNumber) {
  if (pageNumber == 0) {
    // set transform to 100
    document.getElementById("slider").style.transform = "translate(0, 0)"
  } else if (pageNumber == 1) {
    // set transform to 200
    document.getElementById("slider").style.transform = "translate(-80vw, 0)"
  } else if (pageNumber == 2) {
    // set transform to 300
    document.getElementById("slider").style.transform = "translate(-160vw, 0)"
  } else if (pageNumber == 3) {
    // set transform to 400
    document.getElementById("slider").style.transform = "translate(-240vw, 0)"
  }else if (pageNumber == 4) {
    // set transform to 400
    document.getElementById("slider").style.transform = "translate(-320vw, 0)"
  }
}