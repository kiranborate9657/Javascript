<!DOCTYPE html>
<html>
<head>
    <title>Form Validation</title>
</head>
<body>

<h2>Registration Form</h2>

<form>
    Name: <input type="text" required><br><br>

    Email: <input type="email" required><br><br>

    Phone: <input type="text" pattern="[0-9]{10}" placeholder="10 digit number" required><br><br>

    Password: <input type="password" minlength="6" required><br><br>

    <input type="submit" value="Submit">
</form>

</body>
</html>
