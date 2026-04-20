<!DOCTYPE html>
<html>
<head>
    <title>Array Display</title>
</head>
<body>

<h2>Display Array Elements</h2>
<p id="result"></p>

<script>
    // Create an array
    let numbers = [10, 20, 30, 40, 50];

    let output = "";

    // Loop through array
    for (let i = 0; i < numbers.length; i++) {
        output += numbers[i] + "<br>";
    }

    // Display result
    document.getElementById("result").innerHTML = output;
</script>

</body>
</html>
