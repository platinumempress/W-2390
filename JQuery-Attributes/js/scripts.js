$(function() {
$("h2").css({"font-size":"30px"
});                 

$(".slider").attr("src", "images/yellowre.jpeg");

$("#slide1").click(function () {
    $("img").last().attr("src", "images/tendrilre.jpeg");
});

$("#slide2").click(function () {
    $("img").last().attr("src", "images/mancre.jpeg");
});


$("#slide3").click(function () {
    $("img").last().attr("src", "images/shroomre.jpeg");
});

$("#slide4").click(function () {
    $("img").last().attr("src", "images/monkeyre.jpeg");
});

$("#slide5").click(function () {
    $("img").last().attr("src", "images/batre.jpeg");
});

$("#slide6").click(function () {
    $("img").last().attr("src", "images/singre.jpeg");
});

}); 

