function student(name,age,city,profession){
    this.name=name;
    this.age=age;
    this.city=city;
    this.profession=profession;
}
var student1=new student("kiran",25,"pune","tester");
console.log(student1.name);
console.log(student1.age);

console.log(student1.city);

console.log(student1.profession);
