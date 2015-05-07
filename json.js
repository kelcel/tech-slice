var xmlhttp = []; 
var urls = ["features.json", "articles.json"];

$(document).ready(function()
{
    for (var i in urls)
    {
        xmlhttp[i] = new XMLHttpRequest();
       getData(urls[i], xmlhttp[i]);
    }

/*
    alert("done loading features");
    $(".feature").click(function(){
        $("#gallery .img").fadeTo('slow', function()
        {
           $(this).css("background-image", $(this).find(".img").css("background-image")).fadeIn("slow");
        });
    });*/
});

function getData(url, xmlhttp)
{
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);

            if (url == "features.json")
            {
                displayGallery(myArr);
                displayFeatures(myArr);
            }
            else if (url == "articles.json")
            {
                displayArticles(myArr);
            }
            else
            {
                alert("url not found");
            }
       }
    }
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function displayGallery(arr)
{
    $("#gallery .title").text(arr[0].title);
    $("#gallery .img").css("background-image","url(img/" + arr[0].img + ")");
}

function displayFeatures(arr)
{
    var feature = $(".feature");
    $(".feature").remove();
    for ( var i in arr )
    {
        feature.clone().appendTo($("#feature-list"));
        $(".feature .img").last().css("background-image","url(img/" + arr[i].img + ")");
        $(".feature .title").last().text(arr[i].title);
        $(".feature .date").last().text(arr[i].date);

        if ( 0 == i )
        {
            $(".feature").last().addClass("selected");
        }
    }
}

function displayArticles(arr)
{
    var article = $(".article");
    $(".article").remove();
    
    article.clone().appendTo($("#article-list"));
    $(".article .img").css("background-image","url(img/" + arr[0].img + ")");
    $(".article .title").text(arr[0].title);
    $(".article .synopsis p").text(arr[0].synopsis);
    $(".article .date").text(arr[0].date);
    /*var article = $(".article");
    $(".article").remove();
    for ( var i in arr )
    {
        article.clone().appendTo($("#article-list"));
        $(".article .img").last().css("background-image","url(img/" + arr[0].img + ")");
        $(".article .title").last().text(arr[0].title);
        $(".article .date").last().text(arr[0].date);
        $(".article .synopsis p").last().text(arr[0].synopsis);*/
}
