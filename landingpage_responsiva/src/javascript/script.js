$(document).ready(function(){
    $("#mobile_btn").on("click", function (){
        let icon = $("#mobile_btn").find("i");
        let mobile_menu = $("#mobile_menu")
        
        mobile_menu.toggleClass("active");
    
        icon.toggleClass("fa-bars");
        icon.toggleClass("fa-x")
        
    });
});

$(".nav_item").click(function(){
    $(".nav_item").removeClass("active");
    $(this).addClass("active");
})