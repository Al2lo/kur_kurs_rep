"use strict";

window.onload = function () {
  document.addEventListener("click", documentActions); //Actions (делегирования события клик)

  function documentActions(e) {
    var targetElement = e.target;

    if (window.innerWidth > 768 && isMobile.any()) {
      if (targetElement.classList.contains('menu_arrow')) {
        targetElement.closest('.menu_item').classList.toggle('hover');
      }

      if (!targetElement.closest('.menu_item') && document.querySelectorAll('.menu_item._hover').length > 0) {
        _removeClasses(document.querySelectorAll('menu_item._hover'), "_hover");
      }
    }
  }
};