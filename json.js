$(document).ready(function(){
    var xmlhttp = new XMLHttpRequest();
    var featureUrl = "features.json";
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            displayGallery(myArr);
            displayFeatures(myArr);
       }
    }
    xmlhttp.open("GET", featureUrl, true);
    xmlhttp.send();
});

function displayGallery(arr) {
    $("#gallery .title").text(arr[0].title);
    $("#gallery .img").css("background-image","url(img/" + arr[0].img + ")");
}

function displayFeatures(arr) {
    var feature = $(".feature");
    var new_feature = feature.clone();
    $(".feature").remove();
    for ( var i in arr )
    {
        feature.clone().last().appendTo($("#feature-list"));
        $(".feature .img").last().css("background-image","url(img/" + arr[i].img + ")");
        $(".feature .title").last().text(arr[i].title);
        $(".feature .date").last().text(arr[i].date);
    }
}
