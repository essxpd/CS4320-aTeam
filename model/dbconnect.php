<?php

include("../secure/DatabaseAuth.php");

// Create connection
$conn = mysqli_connect(HOSTNAME, USERNAME, PASSWORD);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//echo "Connected successfully";


?>
