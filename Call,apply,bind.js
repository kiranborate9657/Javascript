const person = {
    name: "Kiran"
};

function greet(age) {
    console.log("Hello " + this.name + ", Age: " + age);
}

// call
greet.call(person, 22);

// apply
greet.apply(person, [22]);

// bind
const newFunc = greet.bind(person);
newFunc(22);
