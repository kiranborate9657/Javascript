<!DOCTYPE html>
<html>
<body>

<div id="parent" style="padding:20px; background-color:lightblue;">
    Parent
    <button id="child">Click Me</button>
</div>

<script>
document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent Clicked");
});

document.getElementById("child").addEventListener("click", function () {
    console.log("Button Clicked");
});
</script>

</body>
</html>
