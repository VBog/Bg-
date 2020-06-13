<?php
include ('books.php');
$content = json_encode( $bg_bibrefs_bookTitle, JSON_UNESCAPED_UNICODE );
$filename = 'bookTitle.json';
file_put_contents($filename, $content); 
?>
<html>
<head>
  <meta charset="utf-8">
</head>
<body>  
<?php echo $content; ?>
<br><br><b>Выполнено!!!</b><br>
</body>
</html>
<?php
