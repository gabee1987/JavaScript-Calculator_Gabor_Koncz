$(document).ready(function() {
    $('ul').sortable({
        revert: true,
        cancel: "#sortable li span"
    });
});