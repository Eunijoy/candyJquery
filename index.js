$(document).ready(function(){
$("section img").click(function(){
    $(this).hide("slow");
});

$("button").click(function(){
    $("section img").show("slow");
});
});