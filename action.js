$(document).ready(function() {
  // Hover on an item in the navbar menu (select it)
  $('.dropdown-item').mouseenter(function() {
    // Finding and closing any already open dropdown menu
    $('.active').removeClass('active');
    // Finding the dropdown menu corresponding to the dropdown item I've clicked
    var current_dropdown_menu = $(this).find('.dropdown-menu');
    // Opening the corresponding dropdown menu
    current_dropdown_menu.addClass('active');
  });

  // Leaving the item in the navbar menu (deselect it)
  $('.dropdown-menu').mouseleave(function() {
    // Closing the corresponding dropdown item
    $(this).removeClass('active');
  });
});
