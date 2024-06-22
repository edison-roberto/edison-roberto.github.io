document.addEventListener("DOMContentLoaded", function() {
    startProgress();
});

function startProgress() {
    var htmlProgressBar = document.getElementById("htmlProgressBar");
    var cssProgressBar = document.getElementById("cssProgressBar");
    var jsProgressBar = document.getElementById("jsProgressBar");
    var bootsProgressBar = document.getElementById("bootsProgressBar");

    var progressBars = [htmlProgressBar, cssProgressBar, jsProgressBar, bootsProgressBar];
    var widths = [90, 70, 50, 50]; 

    progressBars.forEach((progressBar, index) => {
        var width = 0;
        var interval = setInterval(function() {
            if (width >= widths[index]) {
                clearInterval(interval);
            } else {
                width++;
                progressBar.style.width = width + '%';
            }
        }, 10);
    });
}
