couleurInitiale = $('#rectangle').css('backgroundColor');

$('#bouton1').click(function(){
  if( $('#rectangle').height() < 100 ) {
    $('#rectangle').css('height', $('#rectangle').height()+10+"px");
  } else {
    $('#rectangle').css('height', '10px');
  }
});

$('#bouton2').click(function(){
  $('#rectangle').css('backgroundColor', 'green');
});

$('#bouton3').click(function(){
  $('#rectangle').css('backgroundColor', couleurInitiale);
});

$('#bouton4').click(function(){
  $('#rectangle').css('display', 'none');
});

$('#bouton5').click(function(){
  $('#rectangle').css('display', 'block');
});
