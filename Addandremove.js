<!DOCTYPE html>
<html>
<head>
    <title>Array Push Pop</title>
</head>
<body>

<h2>Push and Pop Example</h2>
<p id="output"></p>

<script>
    let fruits = ["Apple", "Banana", "Mango"];

    // Add element
    fruits.push("Orange");

    // Remove element
    fruits.pop();

    document.getElementById("output").innerHTML =
        fruits;
</script>

</body>
</html>
