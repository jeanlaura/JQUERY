$('#button').click(function(){
  var nom = $('#nom').val();
  var prenom = $('#prenom').val();
  var mail = $('#mail').val();
  var num = $('#num').val();
  //var sum = parseInt(Number(note1)+Number(note2)+Number(note3)+Number(note4)+Number(note5));
  //var moy = parseInt(Number(note1)+Number(note2)+Number(note3)+Number(note4)+Number(note5))/5;
  //alert(moy);
  var regexABC = /^[A-Za-zàâäéèêëîïùûüÀÂÄÊËÎÏÛÜ]+$/;
  var regexMAIL = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
  var regexNUM = /[^0-9]/;
  if (!regexABC.test(nom) && nom == ''){
    alert('Erreur dans le Nom !');
  }else if (!regexABC.test(prenom) && prenom == '') {
    alert('Erreur dans le Prénom !');
  }else if (!regexMAIL.test(mail) && mail == '') {
    alert('Erreur dans le mail !');
  }else if (!regexNUM.test(num) && num == '') {
    alert('Erreur dans l\'écriture du numéro !');
  }else{
    alert('Votre formulaire à bien été envoyer !');
  }
});
