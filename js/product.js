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

    //Mouseover slide toggle function
    $(".one").mouseover(function(){
        $(".one img").fadeOut(100).fadeIn(1000);
        $(".one img").stop();
    });
    $(".two").mouseover(function(){
        $(".two img").fadeOut(100).fadeIn(1000);
        $(".two img").stop();
    });
    $(".three").mouseover(function(){
        $(".three img").fadeOut(100).fadeIn(1000);
        $(".three img").stop();
    });
    $(".four").mouseover(function(){
        $(".four img").fadeOut(100).fadeIn(1000);
        $(".four img").stop();
    });
    $(".five").mouseover(function(){
        $(".five img").fadeOut(100).fadeIn(1000);
        $(".five img").stop();
    });
    $(".six").mouseover(function(){
        $(".six img").fadeOut(100).fadeIn(1000);
        $(".six img").stop();
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