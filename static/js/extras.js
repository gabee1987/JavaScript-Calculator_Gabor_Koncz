$(document).ready(function() {
    $('ul').sortable({
        revert: true,
        cancel: "#sortable li"
    });

    $('.trash i').click(function() {
        $('.notepad ul').empty();
    })
});