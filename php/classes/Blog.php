<?
class Blog{
  static function getPosts(){
      global $mysqli;
      $result = $mysqli->query("SELECT blog.id, blog.title, blog.text, users.name AS author, blog.date_added FROM `blog`,`users` WHERE users.id = blog.author"); // Запрашиваем все посты из БД
      // NULL == false
      // Наличие чего либо это всегда TRUE
      $posts = [];
      while($row = $result->fetch_assoc()){
        $posts[] = $row;
      }
      echo json_encode($posts);
  }
  static function getPost($id){
    global $mysqli;
    $result = $mysqli->query("SELECT * FROM blog WHERE id=$id"); // Выбор поста из БД по ID
    echo json_encode($result->fetch_assoc());
  }
  static function addPost($title,$text,$author,$category,$newCategory){
    global $mysqli;
    if($category=="addNew"){ // Срабатывает при добавлении новой категории
      Blog::addCategory($newCategory);
      $result = $mysqli->query("SELECT id FROM `category` WHERE `name`='$newCategory'");
      $idCategory = $result->fetch_assoc()['id'];
      $mysqli->query("INSERT INTO `blog`(`title`, `text`, `author`,`category`) VALUES ('$title','$text','$author','$idCategory')");
    }else{
      $result = $mysqli->query("INSERT INTO `blog`(`title`, `text`, `author`,`category`) VALUES ('$title','$text','$author',$category)");
    }
  }
  static function removePost($id){
    echo "remove post with id $id";
  }
  
  static function addCategory($category){
    global $mysqli;
    $mysqli->query("INSERT INTO `category`(`name`) VALUES ('$category')");
    echo json_encode(['result'=>'success']);
  }
  static function getCategory(){
    global $mysqli;
    $result = $mysqli->query("SELECT * FROM `category`");
    $category = [];
      while($row = $result->fetch_assoc()){
        $category[] = $row;
      }
      echo json_encode($category);
  }
}
?>