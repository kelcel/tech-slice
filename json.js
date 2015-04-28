$(document).ready(function(){
    
    var xmlhttp = new XMLHttpRequest();
    var url = "data.json";

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            myFunction(myArr);
        }
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
});

function myFunction(arr) {
    $("#gallery .title").text(arr[0].title);
    $("#gallery .img").css("background-image","url(img/" + arr[0].img + ")");

    $(".feature .title").text(arr[0].title);
    $(".feature .img").css("background-image","url(img/" + arr[0].img + ")");
    $(".feature .date").text(arr[0].date);
}
