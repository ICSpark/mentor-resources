window.onload = function() {
  var fish = document.getElementById('fish');
  var arrX = [];

  window.onmousemove = function(event) {
    var x = event.clientX;
    var y = event.clientY;

    fish.style.left = x + 'px';
    fish.style.top = y + 'px';

    arrX.push(x);

    if (arrX.length > 2) {
      arrX.shift();

      if (arrX[1] > arrX[0]) {
        fish.src = "imgs/right1.png";
      } else {
        fish.src = "imgs/left1.png";
      }
    }
  }
}
