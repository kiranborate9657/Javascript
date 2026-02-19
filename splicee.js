var arr = ["kiran", "suman", "sumanth", "kumar", "karan"];
console.log("Before splice:", arr);

var removed=arr.splice(1, 1, "sonali");
console.log("After splice:", arr);

//remove the last element and add the new element at that position
var removedend=arr.splice(arr.length-1, 1, "Arti");
console.log("After splice at the end:", arr);

var removefirst=arr.splice(0,1,"sanika");
console.log("After splice at the beginning:", arr);