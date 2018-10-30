$('#button').click(function(){
  var note1 = $('#note1').val();
  var note2 = $('#note2').val();
  var note3 = $('#note3').val();
  var note4 = $('#note4').val();
  var note5 = $('#note5').val();
  //var sum = parseInt(Number(note1)+Number(note2)+Number(note3)+Number(note4)+Number(note5));
  var moy = parseInt(Number(note1)+Number(note2)+Number(note3)+Number(note4)+Number(note5))/5;
  //alert(moy);
  var regex = /[^0-9]/;
  if (!regex.test(moy) && moy >= 0 && moy < 10){
    $('#appreciation').html("En dessous de la moyenne");
  }else if (!regex.test(moy) && moy >= 10 && moy < 13) {
    $('#appreciation').html("Moyen");
  }else if (!regex.test(moy) && moy >= 13 && moy < 16) {
    $('#appreciation').html("Bien");
  }else if (!regex.test(moy) && moy >= 16 && moy < 20) {
    $('#appreciation').html("Très bien");
  }else if (!regex.test(moy) && moy == 20) {
    $('#appreciation').html("Excellent");
  }
});
