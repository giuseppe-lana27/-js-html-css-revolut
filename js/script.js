// funzione per far visualizzare il menu al click
$(".main-nav li").click(function() {
  $(this).children(".dropdown-menu").slideToggle();
}
);
// funzione mouse enter mostra il menu
$(".main-nav li").mouseenter(function() {
  $(this).children(".dropdown-menu").show("slow");
}
);
// funzione mouse leave scompare il menu
$(".main-nav li").mouseleave(function() {
  $(this).children(".dropdown-menu").hide("slow");
}
);
