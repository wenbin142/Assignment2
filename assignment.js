// YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy'

function checkY(str){
    return str.includes("y") ? console.log("YES"):console.log("NO");
}
checkY("Crazyy");


// 2. Write a function that finds a factorial of a number.
// Example - 5! = 120 (Use a normal loop for this one.)

// function getFactorial(num) {
// logic
// return the value;
// }
function getFactorial(num){
    let finalFactorical=1;
    for(let i=1;i<=num;i++){
        finalFactorical*=i;
    }
    return finalFactorical;
}
console.log(getFactorial(5));


//3. You have an array of students
 let studentList = [
   { name: "Mike", marks: [80, 50, 60, 100] },
   { name: "Daniel", marks: [40, 50, 100, 100] },
   {
     name: "Stacy",
     marks: [20, 100, 50, 70],
   },
 ];
 function calculateAverage(averagemarks) {
    return averagemarks.reduce((sum, mark) => sum + mark, 0) / averagemarks.length;
}

function getHighestAverageStudent(studentList) {
    return studentList.reduce((highest, student) => {
        let average = calculateAverage(student.marks);
        return (highest.average < average) ? { name: student.name, average: average } : highest;
    }, { name: '', average: 0 }).name;
}

console.log(getHighestAverageStudent(studentList));


// function getHighestAverageStudent() {
    // returns the student name with highest average marks
// }

//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4


//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]
let array1 = [20, 20, 11, 4, 11, 20, 2, 4];

function isUnique(arr, number) {
    return arr.indexOf(number) === arr.lastIndexOf(number);
}

function findUniqueNumber(arr) {
    return arr.find(number => isUnique(arr, number));
}

console.log(findUniqueNumber(array1));
//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

// ['abc', 'aba', 'ccc', 'dca', 'a']

// ['aba', 'ccc', 'a']
let arr2=['abc','aba','ccc','dca','a']
function checkPalindrome(arr) {
    return arr.filter(arr => arr == arr.split('').reverse().join(''));
  }
console.log(checkPalindrome(arr2));