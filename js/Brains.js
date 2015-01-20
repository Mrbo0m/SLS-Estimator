//Define inputs, check zAxis
//return array of values x,y,z
function retrVals() {
  var coOrds = {};
  coOrds.x = Number(document.getElementById("x").value);
  coOrds.y = Number(document.getElementById("y").value);
  coOrds.z = Number(document.getElementById("z").value);
  var check = document.getElementById("zAxis").checked;
  if (check) {
    var min = Math.min(coOrds.x,coOrds.y,coOrds.z);
    var temp = coOrds.z;
    if (min !== coOrds.z) {
      if (min === coOrds.x) {
        coOrds.z = coOrds.x
        coOrds.x = temp
        return [coOrds.x,coOrds.y,coOrds.z]
      }
      else {
        coOrds.z = coOrds.y
        coOrds.y = temp
        return [coOrds.x,coOrds.y,coOrds.z]
      }
    }
    else {
      return [coOrds.x,coOrds.y,coOrds.z]
    }
    return [coOrds.x,coOrds.y,coOrds.z]
  }
  else {
    return [coOrds.x,coOrds.y,coOrds.z]
  }
};

//Calc with Switch//
function calculator(n){
        var x = n[0]
        var y = n[1]
        var z = n[2]
        var p = Number(3);
        var premprice = 1.66;
        var result;
        var resultPrem;
        
        
  var calc = document.getElementById("choice").value
        switch(calc){
            case"1" : result = z * p; 
        break;
            case"2" : result = (z * p) + 50; 
        break;
            case"3" : result = (z * p) + 30; 
        break;
    }

//Premium price calc//
   var calc2 = document.getElementById("choice").value
        switch(calc2){
            case"1" : resultPrem = z * p * premprice; 
        break;
            case"2" : resultPrem = (z * p * premprice) + 50; 
        break;
            case"3" : resultPrem = (z * p * premprice) + 30; 
        break;
    }
  
    //Display Result//
    document.getElementById("result").innerHTML = " Standard =  &#163;  " + result;
    myContainer(retrVals());
  
    //Display 2nd Result//
    document.getElementById("resultPrem").innerHTML = " Express =  &#163;  " + resultPrem;
    myContainerPrem(retrVals());
}; //End of Calculator

//Compare with Containers//
function myContainer(p){
    var x = p[0]
    var y = p[1]
    var z = p[2]
    var container;
    if (z <= 25 && x <= 110 && y <= 90 ){
    container = "Your Standard part will fit in a &#8211; Size 1 Container &#163;40";
    }
    else if (z <= 25 && x <= 110 && y <= 180 ){
    container = "Your Standard part will fit in a &#8211; Size 2 Container &#163;70";
    }
    else if (z <= 25 && x <= 220 && y <= 180 ){
    container = "Your Standard part will fit into &#8211; Size 3 Container &#163;115";
    }
    else if (z <= 50 && x <= 110 && y <= 90 ){
    container = "Your Standard part will fit into &#8211; Size 4 Container &#163;75";
    }
    else if (z <= 50 && x <= 110 && y <= 180 ){
    container = "Your Standard part will fit into &#8211; Size 5 Container &#163;130";
    }
    else if (z <= 50 && x <= 220 && y <= 180 ){
    container = "Your Standard part will fit into &#8211; Size 6 Container &#163;215";
    }
    else if (z <= 75 && x <= 110 && y <= 90 ){
    container = "Your Standard part will fit into &#8211; Size 7 Container &#163;110";
    }
    else if (z <= 75 && x <= 110 && y <= 180 ){
    container = "Your Standard part will fit into &#8211; Size 8 Container &#163;185";
    }
    else if (z <= 75 && x <= 220 && y <= 180 ){
    container = "Your Standard part will fit into &#8211; Size 9 Container &#163;310";
    }
    else if (z <= 100 && x <= 110 && y <= 90 ){
    container = "Your Standard part will fit into &#8211; Size 10 Container &#163;135";
    }
    else if (z <= 100 && x <= 110 && y <= 180 ){
    container = "Your Standard part will fit into &#8211; Size 11 Container &#163;235";
    }
    else if (z <= 100 && x <= 220 && y <= 180 ){
    container = "Your Standard part will fit into &#8211; Size 12 Container &#163;390";
    }
    else if (z > 330 && x > 230 && y > 190 ){
    container = "Your Part is to large for build Envelope please resize or divide it into seperate builds.";
    }
    else{
    container = "Your print does not fit into a container. "
    }
  //Display Container Result//
  document.getElementById("container").innerHTML = container;
};

function myContainerPrem(p){
    var x = p[0]
    var y = p[1]
    var z = p[2]
    var containerPrem;
    if (z <= 25 && x <= 110 && y <= 90 ){
    containerPrem = "Your Express part will fit in a &#8211; Size 1 Container &#163;67";
    }
    else if (z <= 25 && x <= 110 && y <= 180 ){
    containerPrem = "Your Express part will fit in a &#8211; Size 2 Container &#163;117";
    }
    else if (z <= 25 && x <= 220 && y <= 180 ){
    containerPrem = "Your Express part will fit into &#8211; Size 3 Container &#163;192";
    }
    else if (z <= 50 && x <= 110 && y <= 90 ){
    containerPrem = "Your Express part will fit into &#8211; Size 4 Container &#163;125";
    }
    else if (z <= 50 && x <= 110 && y <= 180 ){
    containerPrem = "Your Express part will fit into &#8211; Size 5 Container &#163;217";
    }
    else if (z <= 50 && x <= 220 && y <= 180 ){
    containerPrem = "Your Express part will fit into &#8211; Size 6 Container &#163;358";
    }
    else if (z <= 75 && x <= 110 && y <= 90 ){
    containerPrem = "Your Express part will fit into &#8211; Size 7 Container &#163;183";
    }
    else if (z <= 75 && x <= 110 && y <= 180 ){
    containerPrem = "Your Express part will fit into &#8211; Size 8 Container &#163;308";
    }
    else if (z <= 75 && x <= 220 && y <= 180 ){
    containerPrem = "Your Express part will fit into &#8211; Size 9 Container &#163;517";
    }
    else if (z <= 100 && x <= 110 && y <= 90 ){
    containerPrem = "Your Express part will fit into &#8211; Size 10 Container &#163;225";
    }
    else if (z <= 100 && x <= 110 && y <= 180 ){
    containerPrem = "Your Express part will fit into &#8211; Size 11 Container &#163;392";
    }
    else if (z <= 100 && x <= 220 && y <= 180 ){
    containerPrem = "Your Express part will fit into &#8211; Size 12 Container &#163;650";
    }
    else if (z > 330 && x > 230 && y > 190 ){
    containerPrem = "Your Part is to large for build Envelope please resize or divide it into seperate builds.";
    }
    else{
    containerPrem = "Your print does not fit into a container. "
    }
  //Display Container Result//
  document.getElementById("containerPrem").innerHTML = containerPrem;
};

//Reset Button//  
document.forms[0].addEventListener('reset', function() {
    document.getElementById('result').innerHTML = 'Standard =';
    document.getElementById('container').innerHTML = '';
    document.getElementById('resultPrem').innerHTML = 'Express =';
    document.getElementById('containerPrem').innerHTML = '';
});

