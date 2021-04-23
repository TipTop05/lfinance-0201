<?php
  header('Content-Type: text/html; charset=utf-8');
  $uploaddir = '../userfile/';
  $uploadfile = $uploaddir . basename($_FILES['userfile']['name']);
  if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
      echo "Файл корректен и был успешно загружен.\n";
  } else {
      echo "Возможная атака с помощью файловой загрузки!\n";
  }
?>