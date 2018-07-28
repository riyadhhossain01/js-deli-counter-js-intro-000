var katzDeliLine = []
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  for(var i =0; i<katzDeliLine.length; i++){
    if(katzDeliLine[i] === name )
    return "Welcome, " + katzDeliLine[i] + ". You are number " + (i+1) + " in line."
  }
}

function nowServing(){
  if(katzDeliLine.length == 0)
    return "There is nobody waiting to be served!"
  else {
    return ("Currently serving: " + katzDeliLine.shift());

  }

}

function currentLine(array){
  if(katzDeliLine.length = 0)
    return "The line is currently empty."
  else {
    var x =0;
    var string = "The line is currently: ";
    while(x<katzDeliLine.length){
      string += "${x+1}. "  + katzDeliLine[x];
      x++
    }
    return string;
  }
}
