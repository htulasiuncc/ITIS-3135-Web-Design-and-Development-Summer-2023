'use strict';

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    
    // Close all other panels
    for (var j = 0; j < acc.length; j++) {
      var otherPanel = acc[j].nextElementSibling;
      if (otherPanel !== panel) {
        otherPanel.style.maxHeight = null;
        acc[j].classList.remove("active");
      }
    }
    
    // Toggle the current panel
    this.classList.toggle("active");
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
