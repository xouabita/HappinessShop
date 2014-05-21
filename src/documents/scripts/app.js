document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('open_menu').onclick = function () {
    console.log("Clicked");
    var mobile_menu = document.getElementById('mobile_menu');
    if (mobile_menu.className == "hidden") {
      mobile_menu.className = "";
    } else {
      mobile_menu.className = "hidden";
    }
    return false;
  };
}, false);
