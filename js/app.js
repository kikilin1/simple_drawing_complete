var color = $("#selected").css("background");
var ctx=$("canvas")[0].getContext("2d");
ctx.lineWidth=5;
$(".controls").on("click", "li",function (){
    
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
    
    



});
$("#revealColorSelect").click(function(){
    
    $("#colorSelect").toggle();



});

$("#red,#green,#blue").change(function(){
    var r= $("#red").val();
    var g= $("#green").val();
    var b= $("#blue").val();
    var mycolor = "rgb(" +r + "," +g+"," +b+")";
    $("#newColor").css("background-color", mycolor);
    
});

$("#addNewColor").click(function(){
    $newli=$("<li></li>");
    $newli.css("background-color",$("#newColor").css("background-color"));
               $(".controls ul").append($newli);
    $(".selected").removeClass("selected");
    $newli.addClass("selected");
    
    
})
 var mouseIsDown = false;
var lastEvent;
$("canvas").on("mousedown", function(e){
    mouseIsDown = true;
    lastEvent = e;
    ctx.strokeStyle = $(".selected").css("background-color");



});
$("canvas").on("mouseup", function(){
    mouseIsDown=false;


})
$("canvas").on("mousemove", function(e){
    if(mouseIsDown){
        ctx.beginPath();
        ctx.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        lastEvent = e;
    
    
    
    }
    
    
    
})
























