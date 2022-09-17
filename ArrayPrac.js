console.log("Wellcome to the Array Practice Problems ");

const ARRAY_LENGTH = 10
var arr = []
for (var i = 1; i <= 10; i++) {
   let x = Math.floor(Math.random()*(999-100+1)+100);
    arr.splice(i,0,x)
   }
   console.log(arr);


//without sorting 
//for second largest and smallest element
   const minimumIndex = arr => {
      return arr.indexOf(Math.min(...arr));
   };
   const maximumIndex = arr=> {
    return arr.indexOf(Math.max(...arr));
 };
const secondMinimum = arr => {
    const copy = arr.slice();
    copy.splice(minimumIndex(copy), 1);
    return copy[minimumIndex(copy)];
 };
 console.log("Second Smallets Number:- "+secondMinimum(arr));
 
 const secondMax = arr => {
   const copy = arr.slice();
   copy.splice(maximumIndex(copy), 1);
   return copy[maximumIndex(copy)];
};
console.log("Second Largest Number:- "+secondMax(arr));

 


   // By Sorting
// for second largest value
   function print2largest(arr, arr_size) {
      let i, first, second;
      if (arr_size < 2) {
          document.write(" Invalid Input ");
          return;
      }
      arr.sort();
      for (i = arr_size - 2; i >= 0; i--) {
          if (arr[i] != arr[arr_size - 1]) {
              console.log("The second largest element is " + arr[i]);
              return;
          }
      }
      console.log("There is no second largest element");
  }
  let n = arr.length;
  print2largest(arr, n);

//for second smallest value
let m = arr.length;
arr.sort();
console.log("second smallest element is "+arr[1]);
 



