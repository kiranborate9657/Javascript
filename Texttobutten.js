<!DOCTYPE html>
<html>
<head>
    <title>Change Text</title>
</head>
<body>

<p id="demo">Hello Kiran</p>

<button onclick="changeText()">Click Me</button>

<script>
function changeText() {
    document.getElementById("demo").innerHTML = "Text Changed Successfully!";
}
</script>

</body>
</html>
