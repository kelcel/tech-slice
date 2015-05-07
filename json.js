var xmlhttp = []; 
var urls = ["features.json", "articles.json"];

$(document).ready(function()
{
    for (var i in urls)
    {
        xmlhttp[i] = new XMLHttpRequest();
        getData(urls[i], xmlhttp[i]);
    }
});

function getData(url, xmlhttp)
{
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var objArr = JSON.parse(xmlhttp.responseText);
            if (url == "features.json")
            {
                displayGallery(objArr[0]);
                displayFeatures(objArr);
            }
            else if (url == "articles.json")
            {
                displayArticles(objArr);
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

function displayGallery(obj)
{
    $("#gallery .img").fadeOut(0);
    $("#gallery .title").text(obj.title);
    $("#gallery .img").css("background-image","url(img/" + obj.img + ")");
    $("#gallery p").text(obj.descript);
    $("#gallery .img").fadeIn(500);
}

function displayFeatures(objArr)
{
    var feature = $(".feature");
    $(".feature").remove();
    for ( var i in objArr )
    {
        feature.clone().appendTo($("#feature-list"));
        $(".feature .img").last().css("background-image","url(img/" + objArr[i].img + ")");
        $(".feature .title").last().text(objArr[i].title);
        $(".feature .date").last().text(objArr[i].date);
        if ( i == 0 )
        {
            $(".feature").addClass("selected");
        }
    }
    featureEffects(objArr);
}

function featureEffects(objArr)
{
    $(".feature").hover(function()
    {
        $(this).addClass("feature-hover");
    }, function()
    {
        $(this).removeClass("feature-hover")
    });

    $(".feature").click(function()
    {
        $(".feature").removeClass("selected");
        $(this).addClass("selected");
        displayGallery(objArr[$(this).index()]);
    });
}

function displayArticles(objArr)
{
    var article = $(".article");
    $(".article").remove();
    for ( var i in objArr )
    {
        article.clone().appendTo($("#article-list"));
        $(".article .img").css("background-image","url(img/" + objArr[i].img + ")");
        $(".article .title").text(objArr[i].title);
        $(".article .synopsis p").text(objArr[i].synopsis);
        $(".article .date").text(objArr[i].date);
    }
}
