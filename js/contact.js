$(document).ready(function(){
    // Mouseover function on navigation 
    $("nav a.one").mouseover(function(){
        $("nav a.one").css("font-size", "18px");
        $("nav a.one").css("background", "rgba(255,255,255,0.5)");
    });
    $("nav a.one").mouseout(function(){
        $("nav a.one").css("font-size", "16px");
        $("nav a.one").css("background", "none");
    });
    $("nav a.two").mouseover(function(){
        $("nav a.two").css("font-size", "18px");
        $("nav a.two").css("background", "rgba(255,255,255,0.5)");
    });
    $("nav a.two").mouseout(function(){
        $("nav a.two").css("font-size", "16px");
        $("nav a.two").css("background", "none");
    });
    $("nav a.three").mouseover(function(){
        $("nav a.three").css("font-size", "18px");
        $("nav a.three").css("background", "rgba(255,255,255,0.5)");
    });
    $("nav a.three").mouseout(function(){
        $("nav a.three").css("font-size", "16px");
        $("nav a.three").css("background", "none");
    });
    $("nav a.four").mouseover(function(){
        $("nav a.four").css("font-size", "18px");
        $("nav a.four").css("background", "rgba(255,255,255,0.5)");
    });
    $("nav a.four").mouseout(function(){
        $("nav a.four").css("font-size", "16px");
        $("nav a.four").css("background", "none");
    });

    // Mouseover function on main
    $("main").mouseover(function(){
        $("main").css("background", "rgba(0,0,0,0.2)");
    });
    $("main").mouseout(function(){
        $("main").css("background", "rgba(0,0,0,0.1)");
    });

    //Fixed nav when scroll down
    $(function() {
        $(window).on("scroll", function() {
               if($(window).scrollTop() > 50) {
                $("header").addClass("scroll-nav");
            } else {
               $("header").removeClass("scroll-nav");
            }
        });
    });
});