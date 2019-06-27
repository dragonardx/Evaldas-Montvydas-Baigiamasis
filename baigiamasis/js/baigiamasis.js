"use strict";

// function barrFill() {
//     var elem1 = document.getElementsByClassName('progress-bar');
//     for (var i = 0; i < elem1.length; i++) {
//         var elm = elem1[i];
//         elm.getElementsByClassName('cloud');
//         elm.style.width = parseFloat(elm.getAttribute('data-max')) + "%"
//     }
// }
//
// barrFill();
//
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

$(function() {
    var scrollActions = {
        progressBars: false,
        runningNumbers: false
    };
    $(window).on('scroll', function (e) {
        var _this = $(this);
        var scrolledTop = _this.scrollTop();

        if (scrolledTop + _this.outerHeight() >= $("#progress_bars").offset().top
            && !scrollActions.progressBars
        ) {
            startProgressBarsAnimation();
            scrollActions.progressBars = true;
        }

        if (scrolledTop + _this.outerHeight() >= $("#running_numbers").offset().top
            && !scrollActions.runningNumbers
        ) {
            startRunningNumbersAnimation();
            scrollActions.runningNumbers = true;
        }
    });

    function startProgressBarsAnimation() {
        var elements = document.getElementsByClassName('progress-bar');
        for (var i = 0; i < elements.length; i++) {
            var elm = elements[i];
            handleText(elm, true);
            addInterval(elm);
        }
    }

    function stop(interval) {
        clearInterval(interval);
    }

    function handleText(elm, hide) {
        var titleContainerElm = elm.getElementsByClassName("title-container")[0];
        var left = 0;
        if (hide) {
            left = "-" + titleContainerElm.offsetWidth + "px";
        }
        titleContainerElm.style.left = left;
    }

    function addInterval(elm)
    {
        var innerCloudElm = elm.getElementsByClassName('inner-cloud')[0];
        var percentage = parseFloat(elm.getAttribute('data-percentage'));
        var counter = 0;
        var interval = setInterval(function() {
            elm.style.width = percentage + "%";
            innerCloudElm.innerHTML = counter + "%";

            if (counter === parseInt(percentage)) {
                stop(interval);
                handleText(elm);
            }
            counter++;
        }, 30);
    }
});