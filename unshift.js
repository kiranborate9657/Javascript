var names=["Alice", "Bob", "Charlie", "David"];
console.log("Before unshift:", names);
//adding the name in the array
var addnames= names.unshift("kiran");
console.log("After unshift:", names);

//remove the elen]ment from the starting of the array
var remove=names.shift();
console.log("After shift:", names);

//remove the element from the end of the array
var removeend=names.pop();
console.log("After pop:", names);
