"use strict";

function barrFill() {
    var elem1 = document.getElementsByClassName('progress-bar');
    for (var i = 0; i < elem1.length; i++) {
        var elm = elem1[i];
        elm.getElementsByClassName('cloud');
        elm.style.width = parseFloat(elm.getAttribute('data-max')) + "%"
    }
}

barrFill();

// var width = 1;
// var id = setInterval(frame, 80);
// function frame() {
//     if (width >= 80) {
//         clearInterval(id);
//     } else {
//         width++;
//         elem1.style.width = width + '%';
//         elem1.innerHTML = width * 1  + '%';
//     }
// }
// }

$(function () {
    $(".video").click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);

        });
    });
});