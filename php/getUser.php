<?php
  header("Access-Control-Allow-Origin: http://localhost:3000");
	header('Access-Control-Allow-Credentials: true');
  session_start();
  $mysqli = new mysqli('localhost','root','root','f92553mg_0201');
	if(!empty($_SESSION['id'])){
		$id = $_SESSION['id'];
		$result = $mysqli->query("SELECT * FROM users WHERE id='$id'");
		echo json_encode($result->fetch_assoc());
	}else{
		echo json_encode(['result'=>'error']);
	}
?>