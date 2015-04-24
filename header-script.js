$(document).ready(function(){

    /*Toggle Secondary Nav*/
    $(".branding img").click(function(){
        $("#secondary").animate({left: "0px"} , "fast");
    });

    $("#secondary .close").click(function(){
        $("#secondary").animate({left: "-250px"}, "fast");
    });
    
    /*Menu Link Coloring*/
    $("#menu > ul > li > a").hover(function(){
        $("#menu > ul  > li > a:hover").css("color","white");
    },
        function(){
            $("#menu > ul > li > a").css("color","#3B1F11");
        }
    );

    $(".dropdown").hover(function(){
        $("#menu > ul > li:hover > a").css("color","white");
    },
        function(){
            $("#menu > ul > li > a").css("color","#3B1F11");
        }
    );
});
