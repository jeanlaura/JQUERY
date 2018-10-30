/*$('#position').keydown(function(){
  $('#rectangle').keyCode;
});
$(document).keydown(function(e){
 switch (e.which){
   case 37: // fleche gauche
     $('#rectangle').stop().animate({left:'-=10'}); break;
   case 38: // fleche haut
     $('#rectangle').stop().animate({top:'-=10'}); break;
   case 39: // fleche droite
     $('#rectangle').stop().animate({left:'+=10'}); break;
   case 40: // fleche bas
     $('#rectangle').stop().animate({top:'+=10'}); break;
 }
});*/
var windowWidth = $(window).innerWidth();
var windowHeight = $(window).innerHeight();
var rectangleWidth = $('#rectangle').width();
var rectangleHeight = $('#rectangle').height();

$("#champ").keydown(function(event) {
  //détection de la touche appuyée
  switch (event.which) {
    //fleche gauche
    case 37:
        $('#rectangle').css('left', '-=10');
        if($('#rectangle').position().left<=0){
          $('#rectangle').css('left', windowWidth-rectangleWidth);
        }
        break;
    //fleche haut
    case 38:
        $('#rectangle').css('top', '-=10');
        if($('#rectangle').position().top<=0){
          $('#rectangle').css('top', windowHeight-rectangleHeight);
        }
        break;
    //fleche droite
    case 39:
        $('#rectangle').css('left', '+=10');
        if($('#rectangle').position().left>=windowWidth-rectangleWidth){
          $('#rectangle').css('left', 0);
        }
        break;
    //fleche bas
    case 40:
        $('#rectangle').css('top', '+=10');
        if($('#rectangle').position().top>=windowHeight-rectangleHeight){
          $('#rectangle').css('top', 0);
        }
        break;
    default:
    alert("N'tliser que les flèches de direction");
  }
});
