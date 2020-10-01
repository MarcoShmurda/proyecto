<?php

$server = 'localhost:3308';
$username = 'Marco Shmurda';
$password = 'Marco_2684';
$database = 'pruebatutan';

try {
  $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
} catch (PDOException $e) {
  die('Connection Failed: ' . $e->getMessage());
}

?>
