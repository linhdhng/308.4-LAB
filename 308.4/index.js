console.log("===== PART 1: REFACTORING OLD CODE =====")

const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

const newArray = csvData.split('\n') //Created new array where the elements are seperated from splitting '/n'

const table = newArray.map(item => item.replace(/,/g, ' || ')); //Using string.replace to replace every comma with a dividor, creating cells. Adding /g to th condition so that all of the matching value will be replaced

console.log(table) //Print out our table array

console.log("===== PART 2: EXPANDING FUNCTIONALITY =====")

// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.

const headingRow = newArray[0] //Heading row located at index 0 inside of parent array 
const columnNames = headingRow.split(',')
const numColumns = columnNames.length //Storing number of columns in the first row

const twoDArray = []  //Initialize a parrent array to hold the data
for (i = 0; i < newArray.length; i++) {
    const columns = newArray[i].split(',')
    twoDArray.push(columns) //Push each rows into the parent array
}

console.log(twoDArray)

console.log("===== PART 3: TRANSFORMING DATA =====")

// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

const objectArray = [] //Initializing a parent array 
for (let i = 1; i < newArray.length; i++) {
    const rowData = newArray[i].split(',')
    const rowObject = {} //Create an empty object 
    //Iterating over each rows and have object heading for each columns
    for (let j = 0; j < numColumns; j++) {
      rowObject[columnNames[j].toLowerCase()] = rowData[j];
    }
    objectArray.push(rowObject) //Storing these objects in a parent array
}
console.log(objectArray)

console.log("===== PART 4: SORTING ANF MANIPULATING DATA =====")

// Remove the last element from the sorted array.
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }

let remove = objectArray.pop()
let add = objectArray.splice(1,1,{ id: "48", name: "Barry", occupation: "Runner", age: "25" })
let addToEnd = objectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

console.log(objectArray)

// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group.
// This calculation should be accomplished using a loop.
let totalAge = 0  //Using for...of loop to calculate the total age 
for (element of objectArray) {  //Looping through each onject from the parent array
    totalAge += parseInt(element.age) //Using parseint to convert the string data from age and return an integer
}

const averageAge = totalAge/newArray.length

console.log("The average age of the new group is " + averageAge)

console.log("===== PART 5: FULL CIRCLE =====")

// As a final task, transform the final set of data back into CSV format.

//Use reduce() method to execute callback function on each element of the array
const csvString = objectArray.reduce((accumulator, currenValue) => {
    const values = Object.values(currenValue); //return an array of the objects' values
    return accumulator + values.join(',') + '\n'; //return a combination of all of the elements in the values array, separated with '\n'
}, '') //set the initialValue to be ''

console.log(csvString)


