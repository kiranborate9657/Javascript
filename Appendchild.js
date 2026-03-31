<!DOCTYPE html>
<html>
<head>
    <title>DOM Example 6</title>
</head>
<body>

<ul id="list">
    <li>Item 1</li>
</ul>

<button onclick="addItem()">Add Item</button>

<script>
function addItem() {

    var li = document.createElement("li");

    li.textContent = "New Item";

    document.getElementById("list").appendChild(li);

}
</script>

</body>
</html>
