"use strict";
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

    function startRunningNumbersAnimation() {

        var arr = document.getElementsByClassName('running-number');

        var increment = 0;
        for (var i = 0; i < arr.length; i++) {
            var elm = arr[i];
            slideDown(elm, increment);

            // Run the numbers
            runTheNumbers(elm.getElementsByClassName("number-to-run")[0]);

            increment += 500;
        }
    }

    function runTheNumbers(elm) {
        var increment = parseInt(elm.getAttribute('data-increment'));
        var counter = 0;
        var interval = setInterval(function() {
            elm.innerHTML = counter;

            if (counter >= parseInt(elm.getAttribute('data-max'))) {
                stop(interval);
            }
            counter += increment;
        }, 30);
    }

    function slideDown(elm, increment) {
        setTimeout(function() {
            elm.classList.remove("lift-up");
        }, increment);

    }
});