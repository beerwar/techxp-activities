<?php

$host = "127.0.0.1";
$port = 3306;
$username = "YOUR_DATABASE_USERNAME";
$password = "YOUR_DATABASE_PASSWORD";
$database = "YOUR_DATABASE_NAME";

$conn = new mysqli(
    $host,
    $username,
    $password,
    $database,
    $port
);
?>