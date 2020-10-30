// ---------- SOLUTION 1: MOUSEENTER & MOUSELEAVE ----------

$(document).ready(function() {
  // Hover on a dropdown item in the navbar menu (to select it)
  $('.dropdown-item').mouseenter(function() {
    // Finding the dropdown menu corresponding to the dropdown item
    // ***** SOLUTION 1: CHILDREN() *****
    var current_dropdown_menu = $(this).children('.dropdown-menu');

    /*
    // ***** SOLUTION 2: FIND() *****
    var current_dropdown_menu = $(this).find('.dropdown-menu');
    */

    // Opening the corresponding dropdown menu
    current_dropdown_menu.addClass('active');
  });

  // Leaving the dropdown item in the navbar menu (deselect it)
  $('.dropdown-item').mouseleave(function() {
    // Closing the corresponding dropdown item
    $(this).children('.dropdown-menu').removeClass('active');
  });

  // ----------------- Hamburger menu -----------------
  // Clicking on burger icon shows the mobile menu
  $('.burger-menu-icon').click(function() {
    $('#hamburger-menu').addClass('active');
  });
  // Clicking on the "X" closes the mobile menu
  $('i.fas.fa-times').click(function() {
    $('#hamburger-menu').removeClass('active');
  });
});

/*
// ---------- SOLUTION 2: CLICK ----------
$(document).ready(function() {
  // Clicking on a dropdown item in the navbar menu (to select it)
  $('.dropdown-item').click(function() {
    // Opening & closing the corresponding dropdown menu
    $(this).find('.dropdown-menu').toggleClass('active');
  });
});
*/
