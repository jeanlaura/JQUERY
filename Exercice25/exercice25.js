$('#button').click(function(){
  var nom = $('#nom').val();
  var prenom = $('#prenom').val();
  var dateNaiss = $('#dateNaiss').val();
  var lieuNaiss = $('#lieuNaiss').val();
  var emploi = $('#emploi').val();
  var societe = $('#societe').val();
  //var sum = parseInt(Number(note1)+Number(note2)+Number(note3)+Number(note4)+Number(note5));
  //var moy = parseInt(Number(note1)+Number(note2)+Number(note3)+Number(note4)+Number(note5))/5;
  //alert(moy);
  var regexABC = /^[A-Za-zàâäéèêëîïùûüÀÂÄÊËÎÏÛÜ]+$/;
  var regexDateNaiss = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  if (!regexABC.test(nom) && nom == ''){
    alert('Erreur dans le Nom !');
  }else if (!regexABC.test(prenom) && prenom == '') {
    alert('Erreur dans le Prénom !');
  }else if (!regexDateNaiss.test(dateNaiss) && dateNaiss == '') {
    alert('Erreur dans la date de naissance !');
  }else if (!regexABC.test(lieuNaiss) && lieuNaiss == '') {
    alert('Erreur dans le lieu de naissance !');
  }else if (!regexABC.test(emploi) && emploi == '') {
    alert('Erreur dans l\'emploi !');
  }else if (!regexABC.test(societe) && societe == '') {
    alert('Erreur dans la société !');
  }else{
    //alert('Votre formulaire à bien été envoyer !');
    $('#phrase').html(prenom+' '+nom+', né(e) le '+dateNaiss+' à '+lieuNaiss+', actuellement '+emploi+' à '+societe+' !');
  }
});
