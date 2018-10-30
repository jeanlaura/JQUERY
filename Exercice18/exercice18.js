var count = 0;
$('#buttonMoins').click(function() {
  count--;
  $('#texte').val(count);
});
$('#buttonPlus').click(function() {
  count++;
  $('#texte').val(count);
});
