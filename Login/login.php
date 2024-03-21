<?php

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    $birthday = $_POST["birthday"];

    // Validate and sanitize input (you should add more validation)
    $name = htmlspecialchars($name);
    $username = htmlspecialchars($username);
    // Perform additional validation if needed

    // Hash the password (use a strong hashing algorithm in a real-world scenario)
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Output the registration data (replace with your desired processing logic)
    echo "Name: $name<br>";
    echo "Username: $username<br>";
    echo "Password: $hashedPassword<br>";
    echo "Birthday: $birthday<br>";
}

?>
