function fn(f)
{
    console.log(f);
    f();
    f();
    f();
}
fn(function(){
var city="Bangalore";
console.log("The city is: " + city);

})