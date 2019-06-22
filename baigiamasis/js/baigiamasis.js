"use strict";
function barrFill() {
    var elem1 = document.getElementById('bar1');
    var elem2 = document.getElementById('bar2');
    var elem3 = document.getElementById('bar3');
    var elem4 = document.getElementById('bar4');
    var elem5 = document.getElementById('bar5');
    var width = 1;
    var id = setInterval(frame, 80);
    function frame() {
        if (width >= 80) {
            clearInterval(id);
        } else {
            width++;
            elem1.style.width = width + '%';
            elem1.innerHTML = width * 1  + '%';
        }
    }
}
barrFill();