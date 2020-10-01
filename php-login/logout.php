<?php
  session_start();

  session_unset();

  session_destroy();

  header('Location:/archivos/php-login');
?>
