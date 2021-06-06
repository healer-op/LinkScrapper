var tag = document.getElementById("txt1");
var site = document.getElementById("txt2");
function redirect () {
  window.location.href = 'https://www.google.com/search?q=' + tag.value + '+site%3A' + site.value;
};
document.getElementById("btn1").addEventListener('click', redirect);