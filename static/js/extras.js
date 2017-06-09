$(document).ready(function() {
    $('ol').sortable({
        revert: true,
        cancel: "#sortable li"
    });

    $('.trash i').click(function() {
        $('.notepad ol').empty();
    })

    //var searchText = document.getElementById("search_text");
    //var textToHighlight = document.documentElement.innerHTML.indexOf(searchText);
    //function handleKeyPress(e){
        //var key=e.keyCode || e.which;
        //if (key==13){
            //textToHighlight.css("background-color", "yellow")
        //}
    //}

    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('clock').innerHTML =
        h + ':' + m + ':' + s;
        var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
        if (i < 10) {i = '0' + i};  // add zero in front of numbers < 10
        return i;
    }

startTime();

});