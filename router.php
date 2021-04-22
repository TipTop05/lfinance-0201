<?
  session_start();  // Создание сессии (сеанса) в PHP
  header("Access-Control-Allow-Origin: http://localhost:3000");
  header('Access-Control-Allow-Credentials: true');
  header('Content-type: text/html; charset=utf-8');
  $uri = explode('/',$_SERVER["REQUEST_URI"]);
  require_once('php/db.php'); // Добавляем в router.php Параметры подключения к БД
  require_once('php/classes/Reg.php'); // Добавляем в router.php все функции для регистрации/авторизации 
  require_once('php/classes/Blog.php'); // Добавляем в router.php все функции для работе с блогом 
  if($uri[1]=='getPosts'){
    Blog::getPosts();
  }else if($uri[1]=='getPost'){
    Blog::getPost($_POST['id']);
  }else if($uri[1]=='addCategory'){
    Blog::addCategory($_POST['category']);
  }else if($uri[1]=='getCategory'){
    Blog::getCategory();
  }else if($uri[1]=='addPost'){
    Blog::addPost($_POST['title'],$_POST['text'],$_POST['author'],$_POST['category'],$_POST['newCategory']);
  }
  
  // Не понятно как прописать пути, если Авторизация и Регистрация на одной странице?
  // Еще не понятно как прописать при Регистрации - что нужно проводить Проверку e-mail
  else if($uri[1]=='login'){
	Reg::handlerReg($_POST['email'],$_POST['pass']);
  }else if($uri[1]=='login'){
	Reg::handlerAuth($_POST['email'],$_POST['pass']);
  }else if($uri[1]=='login'){
	Reg::checkEmail($_POST['email']);
  }


  else{
    require_once("index.html");
  }
  
  
?>