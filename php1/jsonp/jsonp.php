<?php
	
	$callback = isset ( $_GET["callback"] ) ? $_GET["callback"] : "callback";//做一下判断，如果不传callback防止出错
	
	$data = array(
			"username" => "dongjng",
			"age" => "18",
			"sex" => "女",
	);
	
	$json = json_encode($data);//不能直接输出数组，必须转化为字符串
	
	echo "$callback ( $json )"
	
	
?>