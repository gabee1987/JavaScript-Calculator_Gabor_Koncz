$(document).ready(function() {
    $('#container-calc').draggable();
});

$(document).ready(function() {
    $('.minify').on('click', function(event) {
        $('.calc-body').slideToggle();
    });
});