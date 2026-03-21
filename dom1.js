<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="dom1.js" defer></script>
    <script>
        function changeh2content(){
        var h2ref=    document.getElementById("title");

        h2ref.innerText="DOM Concept is changed";
        }
    </script>
</head>

<body>
    <div>
        <h2 id="title">DOM Concepts</h2>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur illum inventore, sit placeat reprehenderit
            asperiores iusto ea at vero, quam quos enim eos ipsa est distinctio nemo! Consectetur ipsa maxime itaque
            minus amet distinctio quaerat iusto ut saepe a omnis sit, culpa fugit nesciunt cum quae! Fugiat omnis
            delectus ut harum perspiciatis libero distinctio dolores repellat, asperiores praesentium reiciendis non
            deserunt nulla ipsum vero nisi soluta accusamus nam. Dolor, officia suscipit ut numquam delectus explicabo
            eos odit ipsum ipsam laudantium, quam veniam accusantium ullam assumenda reiciendis ab enim, quidem
            repellendus necessitatibus consequuntur voluptatem quos vel. Porro debitis nemo eius et?
        </p>
        <button onclick="changeh2content()">change h2 content</button>
    </div>



</body>

</html>
