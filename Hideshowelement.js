<!DOCTYPE html>
<html>
<body>

<p id="para">This is a paragraph</p>
<button onclick="toggleText()">Hide/Show</button>

<script>
function toggleText() {
    let p = document.getElementById("para");
    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}
</script>

</body>
</html>
