//Calc with Switch//
function calculator(){
        var x = Number(document.getElementById("x").value);
        var y = Number(document.getElementById("y").value);
        var z = Number(document.getElementById("z").value);
        var p = Number(3);
        var result;
  var calc = document.getElementById("choice").value
        switch(calc){
            case"1" : result = z * p; 
        break;
            case"2" : result = (z * p) + 50; 
        break;
            case"3" : result = (z * p) + 30; 
        break;
    }
//Display Result//
    document.getElementById("result").innerHTML = " = £" + result;
    myContainer();
  
//Z Axis Optimization//
function zAxisOptimize(){
  
}  
}

//Compare with Containers//
function myContainer(){
        var container;
        var x = Number(document.getElementById("x").value);
        var y = Number(document.getElementById("y").value);
        var z = Number(document.getElementById("z").value);
    if (z <= 25 && x <= 110 && y <= 90 ){
    container = "Your part will fit in a Size 1 Container £40";
    }
    else if (z <= 25 && x <= 110 && y <= 180 ){
    container = "Your part will fit in a – Size 2 Container £70";
    }
    else if (z <= 25 && x <= 220 && y <= 180 ){
    container = "Your part will fit into – Size 3 Container £115";
    }
    else if (z <= 50 && x <= 110 && y <= 90 ){
    container = "Your part will fit into – Size 4 Container £75";
    }
    else if (z <= 50 && x <= 110 && y <= 180 ){
    container = "Your part will fit into – Size 5 Container £130";
    }
    else if (z <= 50 && x <= 220 && y <= 180 ){
    container = "Your part will fit into – Size 6 Container £215";
    }
    else if (z <= 75 && x <= 110 && y <= 90 ){
    container = "Your part will fit into – Size 7 Container £110";
    }
    else if (z <= 75 && x <= 110 && y <= 180 ){
    container = "Your part will fit into – Size 8 Container £185";
    }
    else if (z <= 75 && x <= 220 && y <= 180 ){
    container = "Your part will fit into – Size 9 Container £310";
    }
    else if (z <= 100 && x <= 110 && y <= 90 ){
    container = "Your part will fit into – Size 10 Container £135";
    }
    else if (z <= 100 && x <= 110 && y <= 180 ){
    container = "Your part will fit into – Size 11 Container £235";
    }
    else if (z <= 100 && x <= 220 && y <= 180 ){
    container = "Your part will fit into – Size 12 Container £390";
    }
    else if (z > 330 && x > 230 && y > 190 ){
    container = "Your Part is to large for build Envelope please resize or divide it into seperate builds.";
    }
    else{
    container = "Your print does not fit into a container. "
    }
  //Display Container Result//
  document.getElementById("container").innerHTML = container;
}

//Reset Button//  
document.forms[0].addEventListener('reset', function() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('container').innerHTML = ''  
});
