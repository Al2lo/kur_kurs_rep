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

    if (targetElement.classList.contains('search-form_icon')) {
      document.querySelector('.search-form').classList.roggle('_active');
    } else if (!targetElement.closest('.search-form') && document.querySelectorAll('.search-form._active').length > 0) {
      document.querySelector('.search-form').classList.remove('_active');
    }
  }
};

$(document).ready(function () {
  $('._block-title').click(function (event) {
    $(this).toggleClass('active').next().sliderToggle(300);
  });
});