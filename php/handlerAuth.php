<?php
  header("Access-Control-Allow-Origin: *");
  session_start();
  $mysqli = new mysqli('localhost','root','root','f92553mg_0201');
  $email = trim(mb_strtolower($_POST['email']));
  $pass = trim($_POST['pass']);
  $result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");
  $row = $result->fetch_assoc(); //Преобразуем ответ от базы данных в массив
  //var_dump($row);
  if(password_verify($pass,$row['pass'])){
    $_SESSION['name'] = $row['name'];
    $_SESSION['lastname'] = $row['lastname'];
    $_SESSION['email'] = $row['email'];
    $_SESSION['id'] = $row['id'];
    echo json_encode(['result'=>'success']);
  }else{
    echo json_encode(['result'=>'error']);
  }
?>