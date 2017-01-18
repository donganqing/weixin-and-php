<?php
	header('Access-Control-Allow-Origin:*');//解决跨域问题*为解决所有的跨域问题
	
	$username = isset( $_GET["username"]) ? $_GET["username"] : "has not username！" ;
	
	$sex = isset( $_GET["sex"] ) ? $_GET["sex"] : "girl";
	
	$age = isset( $_GET["age"] ) ? $_GET["age"] : "18";
	
	$data = array (
		"username" => $username,
		"sex" => $sex,
		"age" => $age,
	);
	
	echo json_encode($data)

?>