<?php

$email = $_POST['email'];
$password = $_POST['password'];


if ($email === 'g211210581@gmail.com' && $password === 'g211210581') {
   
    header("Location: dogru.php");
    exit; 
} else {
   
	header("Location: error.php");

}


?>