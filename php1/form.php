<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<p>欢迎：
			<?php
			echo $_POST["name"];//与html中的对应，html中的是post提交方式"name"与html中的name="name"定义的内容是一致的
			?>
		</p>
		<p>您的email地址是：
			<?php 
				echo isset($_POST["email"])?$_POST["email"]:"input中没有设置name属性";	
			?>
		</p>
	isset();是否设置了这个属性（当html中没有设置name时会出错，加上isset判断一下，即使html中没有name属性，也不会报错了）
	</body>
</html>