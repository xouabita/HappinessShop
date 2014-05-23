document.addEventListener('DOMContentLoaded', function() {
  // Toggle the menu
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

  function fn () {
    var placeholders = document.getElementsByClassName("placeholder");
    for (var i = 0; i < placeholders.length; i++) {
      var label = placeholders[i];
      if (label.getAttribute("for") === this.id) {
        if (this.value === "") {
          label.style.visibility = 'visible';
        } else {
          label.style.visibility = 'hidden';
        }
      }
    }
  }

  // Replace placeholder by label
  var placeholders = document.getElementsByClassName("placeholder");
  for (var i = 0; i < placeholders.length; i++) {
    var label     = placeholders[i];
    var target_id = label.getAttribute("for");
    var target    = document.getElementById(target_id);

    target.addEventListener('keydown', fn);
    target.addEventListener('keypress', fn);
    target.addEventListener('keyup', fn);
    target.addEventListener('focus', fn);
    target.addEventListener('blur', fn);
  }
}, false);
