document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        var sheets = document.getElementsByClassName('theme');
        sheets[0].href = 'styles2.css';
        var symbols=document.getElementsByClassName('theme-symbol');
        symbols[0].src='moon.png';
        symbols[0].width='15';
      } else {
        var sheets = document.getElementsByClassName('theme');
        sheets[0].href = 'style.css';
        var symbols=document.getElementsByClassName('theme-symbol');
        symbols[0].src='sun.png';
      }
    });
  });