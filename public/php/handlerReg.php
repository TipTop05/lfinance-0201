<?php
  header("Access-Control-Allow-Origin: *");
  $mysqli = new mysqli('localhost','root','root','f92553mg_0201');
  $name = $_POST['name'];
  $lastname = $_POST['lastname'];
  $email = trim(mb_strtolower($_POST['email']));
  $pass = trim($_POST['pass']);
  $pass = password_hash($pass, PASSWORD_DEFAULT);
  $result = $mysqli->query("SELECT id FROM `users` WHERE `email`='$email'");
  if($result->num_rows){
    echo json_encode(['result'=>'exist']);
  }else{
    $mysqli->query("INSERT INTO `users`(`name`, `lastname`, `email`, `pass`) VALUES ('$name','$lastname','$email','$pass')");
    echo json_encode(['result'=>'success']);
  }
?>