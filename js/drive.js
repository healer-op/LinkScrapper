var nickname = document.getElementById("txt");
function redirect () {
  window.location.href = 'https://www.google.com/search?q=' + nickname.value + '+site%3Adrive.google.com';
};
document.getElementById("btn").addEventListener('click', redirect);
