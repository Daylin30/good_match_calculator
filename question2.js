var startTime = performance.now()

// lets read the data from the csv

const fs = require("fs");
const readline = require("readline");
const stream = fs.createReadStream("./data.csv");
const rl = readline.createInterface({ input: stream });
let data = [];
 
rl.on("line", (row) => {

    data.push(row.split(","));
});
 
let list_data=[]


let male_data = [];
let female_data = [];

let error_list = [];


rl.on("close", () => {



    list_data=data;


    for(let i = 0; i < list_data.length; i++){


        
        if (String(list_data[i][1])!='f' )
        {
            if (String(list_data[i][1])!='m' )
        {

            
            error_list.push(list_data[i]);
        }
        }

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

    var items=[]
    
    for(let i = 0; i < male_data.length; i++){

        for(let j = 0; j < female_data.length; j++){


            const final_name=(male_data[i]+"Matches"+female_data[j]).toLowerCase()
            
          
              let array_name = (final_name.toLowerCase()).split('');
          
            
                var array_check = [];

                var all_values = ""; // hold all values 
            
              for(let i = 0; i < array_name.length; i++){
            
                const isInArray = array_check.includes(array_name[i]);
            
                if (isInArray===false)
                {
            
                
                    array_check.push(array_name[i])

                    all_values+=(final_name.split(array_name[i]).length - 1)
                }
              
                
                
            
              }
             
            
            
            function sum(num) {
              var numString = num.toString();
              var newString = "";
              while (numString.length > 1) { // need to add left to right - while loop to check if the length is >1 or else break the loop
                newString += (parseInt(numString[0]) + parseInt(numString[numString.length - 1])).toString(); // get first and last digit in int
                numString = numString.substring(1, numString.length - 1); // (3)
              }
              newString += numString; // add the remaining digit from the numstring which comes from the while loop
            
              if (newString.length > 2) { // we must check if length is < 2 or else run again till its < 2

                return sum(newString);
              } else {
                return newString;
              }
            }
            
            
            // hold all the data so we can sort at the last step 
            items.push([male_data[i],female_data[j],sum(all_values) ]);



        }
    
    }



    let names_scores=""

    const sorted_order = items.sort(
        (nameA, nameB) =>
        nameB[2] - nameA[2] ||
          nameA[0].localeCompare(nameB[0]),
      )
      
      

    for(let i = 0; i < sorted_order.length; i++){
        names_scores+=items[i][0] +" Matches " + items[i][1]+" " + items[i][2] +"%\n"
    }
        

    const fs = require('fs')

    fs.writeFile('output.txt', names_scores, (err) => {
                  
        // In case of a error throw err.
        if (err) throw err;
    })

    var endTime = performance.now()

    
fs.writeFile('logs.txt', "Execution Time: "+String(endTime - startTime)+"\n\nError with Gender: "+error_list, (err) => {
                  
    // In case of a error throw err.
    if (err) throw err;
})
});


