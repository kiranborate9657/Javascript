<!DOCTYPE html>
<html>
<head>
    <title>DOM Example 4</title>
</head>
<body>

<img id="img" src="image1.jpg" width="200">

<br><br>

<button onclick="changeImage()">Change Image</button>

<script>
function changeImage() {

    document.getElementById("img").src = "image2.jpg";

}
</script>

</body>
</html>
