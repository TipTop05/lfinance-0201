<?
  header("Access-Control-Allow-Origin: *");
  $mysqli = new mysqli('localhost','root','root','f92553mg_0201');
  $title = $_POST['title'];
  $result = $mysqli->query("SELECT * FROM blog WHERE title='$title'");
  if($result->num_rows) echo json_encode(['result'=>'exist']);
  else echo json_encode(['result'=>'title not found']);
?>