"use strict";

$(function () {
  /* faq toggle */
  $(function () {
    $(".faq__question").on('click', function () {
      var box = $(this).closest(".faq");

      if (box.hasClass('faq_active')) {
        box.find('.faq__answer').slideUp(300);
        box.removeClass('faq_active');
      } else {
        box.find('.faq__answer').slideDown(300);
        box.addClass('faq_active');
      }
    });
  });
});