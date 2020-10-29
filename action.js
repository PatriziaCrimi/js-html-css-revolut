// ---------- SOLUTION 1: MOUSEENTER & MOUSELEAVE ----------

$(document).ready(function() {
  // Hover on a dropdown item in the navbar menu (to select it)
  $('.dropdown-item').mouseenter(function() {
    // Finding and closing any already open dropdown menu
    $('.active').removeClass('active');

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

  // Leaving the item in the navbar menu (deselect it)
  $('.dropdown-menu').mouseleave(function() {
    // Closing the corresponding dropdown item
    $(this).removeClass('active');
  });
});

/*
// ---------- SOLUTION 2: CLICK ----------
$(document).ready(function() {
  // Clicking on a dropdown item in the navbar menu (to select it)
  $('.dropdown-item').click(function() {


    BUG TO BE FIXED: senza questa istruzione quando clicco su una nuova voce di menu non  si chiudono automaticamente gli altri menu aperti
    MA se metto questa istruzione non funziona il toggle perché trova sempre l'elemento privo di classe e quindi gliela aggiunge sempre (e l'elemento cliccato non si richiude mai!!!! Resta aperto)

    // Finding and closing any already open dropdown menu
    $('.active').removeClass('active');


    // Finding the dropdown menu corresponding to the dropdown item
    var current_dropdown_menu = $(this).find('.dropdown-menu');
    // Opening & closing the corresponding dropdown menu
    current_dropdown_menu.toggleClass('active');
  });
});
*/
