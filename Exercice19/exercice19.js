var minNumber = 1; // le minimum
var maxNumber = 100; // le maximum
var randomnumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber); // fonction générer
var count = 0;
var regex = /^[0-9]+$/;

$('#click').click(function (){
  var rep = $('#rep').val();
  count++;
  if (regex.test(rep) == false || rep > 100) {
   $("#validation").text("Entrez un chiffre valide entre 1 et 100")
  }
  else if (parseInt(rep) > parseInt(randomnumber)) {
    $("#validation").text("Moins de " + rep);
  }
  else if (parseInt(rep) < parseInt(randomnumber)) {
    $("#validation").text("Plus de " + rep);
  }
  else {
    $("#validation").text("Correcte, la réponse est : " + rep);
    $("#counter").text("Vous avez trouve en " + count + " essai(s) !")
  }
});
