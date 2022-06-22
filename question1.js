const prompt = require('prompt-sync')();

const nameone = prompt('What is the First name?'); // name one

const nametwo = prompt('What is the Second Name?'); //name two


const final_name=(nameone+"Matches"+nametwo).toLowerCase() // add everything together


  let array_letters = (final_name.toLowerCase()).split('');

    var array_check = [];

    var all_values = "";

  for(let i = 0; i < array_letters.length; i++){

    const isInArray = array_check.includes(array_letters[i]);

    if (isInArray===false)
    {

        array_check.push(array_letters[i])

        all_values+=(final_name.split(array_letters[i]).length - 1) // this gives the numbers of each time the character occurs left - right
    }
  
    
  }
 
  
function sum(num) {
  var numString = num.toString();
  var newString = "";
  while (numString.length > 1) {  
    newString += (parseInt(numString[0]) + parseInt(numString[numString.length - 1])).toString();  
    numString = numString.substring(1, numString.length - 1);  
  }
  newString += numString;  

  if (newString.length > 2) {  

    return sum(newString);
  } else {
    return newString;
  }
}


var output_string = "";
output_string+=nameone+" Matches "+ nametwo+" "+sum(all_values) +"%"

if (sum(all_values)>80){
  output_string+=", Good Match";
  

}
  console.log("")

var status=true;
if (nameone === "") {
  //console.log("First Name is Null or Empty")
  status=false;
}

if (nametwo === "") {
  //console.log("Second Name is Null or Empty")
  status=false;
}

if (status==true){
  console.log((output_string));

}
else{
  console.log("Name/s Contain a Null/Empty Value")

}

