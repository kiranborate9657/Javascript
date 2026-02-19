var namee=["Alice", "Bob", "Charlie", "David"];
console.log("The array is:", namee);
var check=namee.includes("Bob");
console.log("Is Bob present in the array?", check);

var check1=namee.includes("Eve");
console.log("Is Eve present in the array?", check1);
 

namee.forEach(function(name,index){
    console.log("The name at index", index, "is", name);

});
