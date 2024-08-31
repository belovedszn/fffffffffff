<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "summit_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO summit (name) VALUES (?)");
$stmt->bind_param("s", $name);

// Execute the statement
if ($stmt->execute()) {
    echo "<script>alert('New record created successfully'); window.location.href='index.html';</script>";
} else {
    echo "<script>alert('Error: " . $stmt->error . "'); window.history.back();</script>";
}

// Close connection
$stmt->close();
$conn->close();
?>
