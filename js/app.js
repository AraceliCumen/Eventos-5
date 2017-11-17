window.addEventListener('load', function(event) { 
  var title = document.getElementsByTagName('h1')[0];
  var div = document.getElementsByTagName('div')[0];
  title.addEventListener('mouseover', function() {
    title.classList.add('textColor');
  });
  title.addEventListener('mouseout', function() {
    title.classList.remove('textColor');  
  });
  div.addEventListener('click', function() {
    div.classList.toggle('big');
  });
});


/*function iniciar(event) {
  alert('hola');
}

window.onload = iniciar;
*/

/*

window.addEventListener('load', iniciar);
function iniciar(event) {
  alert('hola');
}
*/