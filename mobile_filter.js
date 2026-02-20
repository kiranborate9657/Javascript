var details=[
    {
        name:"Apple",
        price:999,
        color:"Red"
    },
    {
        name:"Samsung",
        price:899,
        color:"Blue"
    },
    {
        name:"vivo",
        price:799,
        color:"light",

    },
    {
        name:"Oppo",
        price:699,
        color:"Dark"    
    }
]
var newdata=details.filter(function(element,index)
    {
        return element.price>700;

    });
    console.log("The filtered data is:", newdata);