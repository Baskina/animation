;"use strict";

document.addEventListener('DOMContentLoaded', function(){
    var firstModel = document.getElementById('first-model');
    var secondModel = document.getElementById('second-model');
    var thirdModel = document.getElementById('third-model');
    var bgLine = document.getElementsByClassName('bg-line');
    var bgLineActive = document.getElementsByClassName('bg-line_active');

    var secondLogo = document.getElementById('second-logo');
    var secondTitle = document.getElementById('second-title');


    secondModel.onmouseover = function() {

        thirdModel.style.animationName = "opacity";
        firstModel.style.animationName = "opacity";

        secondLogo.style.animationName = "move-top-logo";
        secondLogo.style.top = "0";
        secondTitle.style.animationName = "";
        secondTitle.style.top = "0";
        secondTitle.style.animationName = "move-top-title";
        secondTitle.style.animationTimingFunction = "cubic-bezier(.7, .0, .3, 1)";
        secondTitle.style.animationDelay = ".1s";
        secondTitle.style.animationDuration = ".4s";


        this.onmouseout = function() {
            thirdModel.style.animationName = "opacity-conversely";
            firstModel.style.animationName = "opacity-conversely";

            secondLogo.style.top = "-50px";
            secondLogo.style.animationDelay = ".2s";
            secondLogo.style.animationName = "move-bottom-logo";

            secondTitle.style.top = "-80px";
            secondTitle.style.animationDelay = "0s";
            secondTitle.style.animationName = "move-bottom-title";

        }
    }
});
