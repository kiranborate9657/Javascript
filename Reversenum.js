<!DOCTYPE html>
<html>
<body>

<script>

let num = 1234;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

document.write("Reversed Number = " + reverse);

</script>

</body>
</html>
