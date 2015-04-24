$(document).ready(function(){

    /*Toggle Secondary Nav*/
    $(".branding img").click(function(){
        $("#secondary").animate({left: "0px"} , "fast");

        var width = parseInt($(window).width() *.06, 10) ;
        var offset = parseInt($(".logo-wrap").css("left"), 10);

        if (width == offset)
            $(".logo-wrap").animate({left: "255px"}, "fast");
        else
            return;
    });

    $("#secondary .close").click(function(){
        $("#secondary").animate({left: "-250px"}, "fast");
        $(".logo-wrap").animate({left: $(window).width()*.06}, "fast");
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

    $(".drop-center").parent().hover(function(){
        $("#menu input").focus();
    });
});
