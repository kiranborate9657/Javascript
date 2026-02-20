var numbers=[10,20,30,40,50];
var result=numbers.map(function(value,index,array){
    return value*2;
});
console.log("The original array is:", numbers);
console.log("The mapped array is:", result);