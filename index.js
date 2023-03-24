var navStatus = false;

function openNav() {
  if (!navStatus) {
    $(".main").css("width", "100%");
    $("li").css("display", "block");
    navStatus = true;
  } else {
    $(".main").css("width", "0");
    $("li").css("display", "none");
    navStatus = false;
  }
}
