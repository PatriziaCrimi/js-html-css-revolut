$(document).ready(function() {
  // Hover on an item in the navbar menu (select it)
  $('.dropdown-item').mouseenter(function() {
    // Opening the corresponding dropdown menu
    $(this' > .dropdown-menu').addClass('active');
  });

  // Leaving the item in the navbar menu (deselect it)
  $('.dropdown-menu').mouseleave(function() {
    // Closing the corresponding dropdown item
    $('.dropdown-menu').removeClass('active');
  });
});
