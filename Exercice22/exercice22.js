$('#aleatoire').click(function(){
  var jeu=['Pierre','Feuille','Papier','Ciseaux'];
  var rand=Math.floor(Math.random()*4);
  document.getElementById('affectation').value=jeu[rand];
  console.log($('#select').val());
  var selectValue = $('#select').val();
  var ordiValue = jeu[rand];
  if (selectValue === 'Pierre' && ordiValue === 'Pierre') {
    $('#gagner').show();
  }else{
    $('#perdu').show();
  }
  if (selectValue === 'Feuille' && ordiValue === 'Feuille') {
    $('#gagner').show();
  }else{
    $('#perdu').show();
  }
  if (selectValue === 'Papier' && ordiValue === 'Papier') {
    $('#gagner').show();
  }else{
    $('#perdu').show();
  }
  if (selectValue === 'Ciseaux' && ordiValue === 'Ciseaux') {
    $('#gagner').show();
  }else{
    $('#perdu').show();
  }
});
/*var victoire = count((selectValue === 'Pierre' && ordiValue === 'Pierre')||(selectValue === 'Papier' && ordiValue === 'Papier')||(selectValue === 'Ciseaux' && ordiValue === 'Ciseaux'));
var defaite = count((selectValue === 'Pierre' && ordiValue != 'Pierre')||(selectValue === 'Papier' && ordiValue != 'Papier')||(selectValue === 'Ciseaux' && ordiValue != 'Ciseaux'));
var pourcentage = parseInt(victoire/100);

if(selectValue === 'Pierre' && ordiValue === 'Pierre') {
  $('#victoire').show();
}*/
