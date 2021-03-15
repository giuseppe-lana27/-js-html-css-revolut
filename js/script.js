// funzione per far visualizzare il menu al click
$(".main-nav li").click(function() {
  $(this).children(".dropdown-menu").slideToggle();
}
);
