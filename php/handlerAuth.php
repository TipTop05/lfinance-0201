<?php
  header("Access-Control-Allow-Origin: http://localhost:3000");
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: GET, POST, HEAD, OPTIONS, PUT, DELETE, PATCH");
  header("Access-Control-Allow-Headers: Origin, Content-Type, Accept");
  session_start();
  $mysqli = new mysqli('localhost','root','root','f92553mg_0201');
  $email = trim(mb_strtolower($_POST['email']));
  $pass = trim($_POST['pass']);
  $result = $mysqli->query("SELECT * FROM 'users_lf' WHERE 'email'='$email'");
  $row = $result->fetch_assoc(); //Преобразуем ответ от базы данных в массив
  //var_dump($row);
  if(password_verify($pass,$row['pass'])){
    $_SESSION['email'] = $row['email'];
    $_SESSION['user_id'] = $row['user_id'];
    echo json_encode(['result'=>'success']);
  }else{
    echo json_encode(['result'=>'error']);
  }
?>