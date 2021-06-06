var pdf = document.getElementById("txt3");
function redirect () {
  window.location.href = 'https://www.google.com/search?q=' + pdf.value + '+filetype%3Apdf';
};
document.getElementById("btn2").addEventListener('click', redirect);
