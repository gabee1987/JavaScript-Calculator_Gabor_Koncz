$(document).ready(function() {
    $('ol').sortable({
        revert: true,
        cancel: "#sortable li"
    });

    //Trash
    $('.trash i').click(function() {
        $('.notepad ol').empty();
    })

    //Drag&Drop
    //document.addEventListener("dragstart", function(event) {
       //event.dataTransfer.setData("Text", event.target.id);
    //});

    /* Events fired on the drop target */
    //document.addEventListener("dragover", function(event) {
        //event.preventDefault();
    //});

    //document.addEventListener("drop", function(event) {
        //event.preventDefault();
        //if ( event.target.className == "droptarget" ) {
           // var data = event.dataTransfer.getData("Text");
           // event.target.appendChild(document.getElementById(data));
           // }
    //});

    //Search
    //var searchText = document.getElementById("search_text");
    //var textToHighlight = document.documentElement.innerHTML.indexOf(searchText);
    //function handleKeyPress(e){
        //var key=e.keyCode || e.which;
        //if (key==13){
            //textToHighlight.css("background-color", "yellow")
        //}
    //}
    //Clock
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