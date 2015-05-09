$(document).ready(function(){

    var logo_position;
    var secondary_width = $("#secondary").width() + 2 * Math.abs( parseInt( $("#secondary").css("padding-left"), 10 ) );
    var old_position = parseInt($(".logo-wrap").css("left"), 10);

    /*Toggle Secondary Nav*/
    $(".branding img").click(function(){
        $("#secondary").animate({left: "0px"} , "fast");

        var new_position = parseInt($(".logo-wrap").css("left"), 10);

        if (new_position == old_position && $(window).width() >= 800) $(".logo-wrap").animate({left: secondary_width + 15}, "fast");
        else return;
    });

    $("#secondary .close").click(function(){
        var position = 0 - secondary_width;

        $("#secondary").animate({left: position}, "fast");
        if ( $(window).width() <= 800 ) logo_position = 0;
        else logo_position = $(window).width() * .06;

        $(".logo-wrap").animate({left: logo_position}, "fast");
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
