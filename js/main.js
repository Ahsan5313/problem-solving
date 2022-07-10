// Start problem solving with JavaScript at here;
// alert('Hello world')

// Write a function that takes an array of string and number. And return interger value;

// let myArray = ['S', 'B', 1, 5, 'k', 6, 7, 'bd', 'fun', 1.2];

// function filteredArray(arr){

//     const result = [];
//    for(let i = 0; i < arr.length; i++){

//       if(typeof arr[i] === 'number'){

//         result.push(parseInt(arr[i]))

//       }
//    }

//    return result;

// }

// console.log(filteredArray(myArray))

// let myArray = [1, 2, 4, 7, 5];

// console.log(myArray[myArray.length - 1])

// function newArray(arr){

//     let newArrayOne = [];

//     let fastEle = arr[0];
//     let lastEle = arr[arr.length - 1];

//     return newArrayOne += [[fastEle], [lastEle]];
// }


// console.log(newArray(myArray));
// let myArray = [ 5, 7, 8, 9, 4, 10, 1, 2, 5, 0];

// function myFun (arr){

//     let newArray = [];

//     for(let i = 0; i < arr.length; i++){

//         myArray[i] = arr[arr.length - i - 1]

//     }

//     return newArray;


// }

// console.log(myFun(myArray))

// let myArray = [ 5, 7, 8, 9, 4, 10, 1, 2, 5, 0];

// function arrReverse(arr){

//   let newArray = [];

//    for(let i = 0; i < arr.length; i++){

//    newArray[i] = arr[arr.length - i - 1];

//    }
//    return newArray;
// }
// console.log(arrReverse(myArray));
// console.log(myArray);

// let n = 12.30;

// console.log(typeof n)

// let myArray = [1, 'bulbul', 'bd', 2, 7, 'eid', 'mubarak', 12, 40, 12.10];

// function myFun(arr){

//     let newArray = [];

//     for(let i = 0; i < arr.length; i++){

//         if(typeof arr[i] === 'number'){

//             newArray.push(parseInt(arr[i]))
//         }
//     }

//     return newArray;

// }

// console.log(myFun(myArray))


// function findIndex(arr, str){


//     let indexNumber;

//    for(let i = 0; i < arr.length; i++){

//       if(arr[i] !== str){

//         indexNumber = i;
//       }else{

//         return i
//       }
//    }


// }
// console.log(findIndex(['Apple', 'Banana', 'Oringe'], 'Banana'));

// const findIndex = (arr, x) => {
//     let a;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== x) {
//         a = i;
//       } else {
//         return i;
//       }
//     }
//   };
  
//   console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
//   console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
//   console.log(findIndex(["a", "g", "y", "d"], "d"));
//   console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))
  
// const findIndex = (arr, str) =>{

//     let a ;

//     for(let i = 0; i < arr.length; i++){

//         if(arr[i] !== str){

//             a = i;
//         }else{

//             return i;
//         }
//     }
// };

// console.log(findIndex(['Apple', 'Banana', 'Oringe'], 'Oringe'));
// console.log(findIndex(['a', 'b', 'c'], 'c'));