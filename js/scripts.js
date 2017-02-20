$(document).ready(function(){
  $("#formWun").submit(function(event){
    var things = [$("input#favorite1").val(), $("input#favorite2").val(), $("input#favorite3").val()];
    console.log(things);
    var things2 = [things[1], things[0], things[2]];
    // console.log(things2);
    var thingsPush = [];
    thingsPush.push(things[1], things[0], things[2]);
    console.log(thingsPush);
    $("#item1").text(thingsPush[0]);
    $("#item2").text(thingsPush[1]);
    $("#item3").text(thingsPush[2]);

    event.preventDefault();
  });
});
