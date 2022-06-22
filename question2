var startTime = performance.now()

// lets read the data from the csv

const fs = require("fs");
const readline = require("readline");
const stream = fs.createReadStream("./data2.csv");
const rl = readline.createInterface({ input: stream });
let data = [];
 
rl.on("line", (row) => {
    data.push(row.split(","));
});
 
let list_data=[]


let male_data = [];
let female_data = [];


// sort function to sort by the highest percentage
function sortFunction(a, b) {


    if (a[2] === b[2]  ) {

        return 0;
    }
    else {

        return (a[2] > b[2]) ? -1 : 1;
    }
}

rl.on("close", () => {

    list_data=data;


    for(let i = 0; i < list_data.length; i++){


        if (list_data[i][1]==='f')
        {


            const isInArray = female_data.includes(list_data[i][0]); // lets check if the female list has any repeated names


            if (isInArray===false)
            {
            
                female_data.push(list_data[i][0]);
            }        
        

        }

        if (list_data[i][1]==='m') 
        {

            
            const isInArray = male_data.includes(list_data[i][0]); // lets check if the males list has any repeated names

            if (isInArray===false)
            {

            male_data.push(list_data[i][0]);
            }

        }

    }

    let final_name1=""
    var items=[]
    
    for(let i = 0; i < male_data.length; i++){

        for(let j = 0; j < female_data.length; j++){


            const final_name=(male_data[i]+"Matches"+female_data[j]).toLowerCase()
            
            function findUnique(str){
                // The variable that contains the unique values
                let uniq = "";
                 
                for(let i = 0; i < str.length; i++){
                  // Checking if the uniq contains the character
                  if(uniq.includes(str[i]) === false){
                    // If the character not present in uniq
                    // Concatenate the character with uniq
                    uniq += str[i]
                  }
                }
                return uniq;
              }
               
              const uni_name=findUnique(final_name)
            
            
              let array2 = (final_name.toLowerCase()).split('');
          
            
                var array_check = [];
                var values = [];
                var all_values = "";
            
              for(let i = 0; i < array2.length; i++){
            
                const isInArray = array_check.includes(array2[i]);
            
                if (isInArray===false)
                {
            
                
                    array_check.push(array2[i])
                    values.push(final_name.split(array2[i]).length - 1)
                    all_values+=(final_name.split(array2[i]).length - 1)
                }
              
                
                
            
              }
             
            
            
            function sum(num) {
              var numString = num.toString();
              var newString = "";
              while (numString.length > 1) { // (1)
                newString += (parseInt(numString[0]) + parseInt(numString[numString.length - 1])).toString(); // (2)
                numString = numString.substring(1, numString.length - 1); // (3)
              }
              newString += numString; // (4)
            
              if (newString.length > 2) { // (5)
                //console.log(newString)
                return sum(newString);
              } else {
                return newString;
              }
            }
            
            
       


  
            // Data which will write in a file.
           // let text = String(male_data[i])+" Matches "+String(female_data[j]) + " ";

           // Write data in 'Output.txt' .
           
            items.push([male_data[i],female_data[j],sum(all_values) ]);



















        }
    
    }

    //console.log("Items");
    //console.log(items);
    items.sort(sortFunction);

    console.log("Items Sorted");
    console.log(items);


    for(let i = 0; i < items.length; i++){

        final_name1+=items[i][0] +" Matches " + items[i][1]+" " + items[i][2] +"%\n"

    }
        


    console.log("Final Names");
    console.log(final_name1);
    const fs = require('fs')

    fs.writeFile('Output.txt', final_name1, (err) => {
                  
        // In case of a error throw err.
        if (err) throw err;
    })

    var endTime = performance.now()
console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

fs.writeFile('logs.txt', "Execution Time: "+String(endTime - startTime), (err) => {
                  
    // In case of a error throw err.
    if (err) throw err;
})
});


