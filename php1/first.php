<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
	</head>
	<body>
		<h1>学习php</h1>
		<p>php是什么啊：<span>
			<?php 
				echo "php是基于浏览器的一门语言"
			?>
		
			</span></p>
		<p>
			
			<?php
				$x = 2;
				$y = 7;
				$z = $y + $x;
				echo $z;	
			?>
			
			</p>
			
			<?php
				$arr = array(1,2,3);
				echo $arr[0];//1
				/*echo $arr[2];//13(与前面的连在一起了，想要分开得向下面写的那样)	
				echo $arr[0]."<br/>";//1
				echo $arr[2];*///3
				$arr = array(
					"a" => "dongjing",
					"b" => "donganqing",
					"c" => "dongzhiyang",
				);
				$array["a"] = "dongyinfeng";
				echo $array["a"]."<br/>";//dongyinfeng
				echo $array;//array
				echo json_encode($arr)."</br>";
				echo $arr["b"]."</br>";
				echo $arr["c"];
			?>	
	</body>
</html>