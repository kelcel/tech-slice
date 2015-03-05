var main = function(){

	var xmlhttp = new XMLHttpRequest();
	var url = "features.txt";

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var myArr = JSON.parse(xmlhttp.responseText);
			myFunction(myArr);
		}
	}
	xmlhttp.open("GET", url, true);
	//xmlhttp.send();

}

$(document).ready(main);

function myFunction(arr) {
    //var out = "<img src='" + arr[0].img + "'></img>";
    //document.getElementById("feature-list").innerHTML = out;
	//$("#article-list").html(out);
	$("#feature-list > .title").text(arr[0].title);
	$("#feature-list > .img").html("<img src='" + arr[0].img + "'>");
	$("#feature-list > .descript").text(arr[0].descript);
}
