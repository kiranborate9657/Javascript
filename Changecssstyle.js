<!DOCTYPE html>
<html>
<head>
    <title>Change Style</title>
</head>
<body>

<p id="para">Styled Text</p>

<button onclick="styleText()">Style Text</button>

<script>
function styleText() {
    var p = document.getElementById("para");

    p.style.color = "red";
    p.style.fontSize = "25px";
    p.style.fontWeight = "bold";
}
</script>

</body>
</html>
