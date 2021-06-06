var file = document.getElementById("txt4");
var type = document.getElementById("txt5");
function redirect () {
  window.location.href = 'https://www.google.com/search?q=' + file.value + '+filetype%3A'+ type.value;
};
document.getElementById("btn3").addEventListener('click', redirect);