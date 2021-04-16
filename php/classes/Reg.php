<?
// Этот код писал я!!!!!!!!!!!!!!!!
class Reg{
  static function handlerReg($email,$pass){
    global $mysqli;
    $email = trim(mb_strtolower($email));
	  $pass = trim($pass);
	  $pass = password_hash($pass, PASSWORD_DEFAULT);
	  $result = $mysqli->query("SELECT user_id FROM `users_lf` WHERE `email`='$email'");
	  if($result->num_rows){
			echo json_encode(['result'=>'exist']);
	  }else{
			$mysqli->query("INSERT INTO `users_lf`(`email`, `pass`) VALUES ('$email','$pass')");
			echo json_encode(['result'=>'success']);
		}
  }
  static function handlerAuth($email,$pass){
    global $mysqli;
    $email = trim(mb_strtolower($email));
	  $pass = trim($pass);
		$result = $mysqli->query("SELECT * FROM `users_lf` WHERE `email`='$email'");
		$row = $result->fetch_assoc(); //Преобразуем ответ от базы данных в массив
		if(password_verify($pass,$row['pass'])){
			$_SESSION['email'] = $row['email'];
			$_SESSION['user_id'] = $row['user_id'];
			echo json_encode(['result'=>'success']);
		}else{
			echo json_encode(['result'=>'error']);
		}
  }
	

}
?>