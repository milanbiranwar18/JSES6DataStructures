console.log("Wellcome to the Array Practice Problems ");

const ARRAY_LENGTH = 10
const randomArray = []
for (var i = 1; i <= 10; i++) {
   let x = Math.floor(Math.random()*(999-100+1)+100);
    randomArray.splice(i,0,x)
   }
   console.log(randomArray);

 
