var numbers = [1, 2, 3, 4, 5, 6];

var evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log("Original Array:", numbers);
console.log("Even Numbers:", evenNumbers);
