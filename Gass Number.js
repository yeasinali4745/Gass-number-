let win=0,los=0;
const label =parseInt(prompt('Enter Game label:')); 
for (var index = 1; index <=label; index++) {
  var gassnumber=parseInt(prompt('Enter your Gass number(0-4)'));
  var ganaratNumber=Math.floor(Math.random()*4);
  if(gassnumber===ganaratNumber){
     win++;
     alert("You win");
     
  }
  else {
     alert("You los");
     alert("Correct number was" + ganaratNumber);
     los++;
  }
}
document.write("You win total=" + win +"<br/>" +"<br/>");

document.write("You los total=" + los +"<br/>");
