<?php
include("../secure/DatabaseAuth.php");
//$servername = "localhost";
//$username = "root";
//$password = "Ateam4320";
// Create connection
//$conn = mysqli_connect($servername,$username,$password);
$conn = mysqli_connect(SERVERNAME,USERNAME,PASSWORD);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";




?>
