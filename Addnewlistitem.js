<!DOCTYPE html>
<html>
<head>
    <title>Add List Item</title>
</head>
<body>

<ul id="myList">
    <li>Item 1</li>
</ul>

<button onclick="addItem()">Add Item</button>

<script>
function addItem() {
    var li = document.createElement("li");
    li.innerHTML = "New Item";

    document.getElementById("myList").appendChild(li);
}
</script>

</body>
</html>
