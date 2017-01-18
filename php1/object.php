<?php
	class Person {
		
		function __construct ($name) {//注意function 后面有空格 下划线有2个
			$this->name = $name;//->相当于. 即$this.name = $name
		}
		
		function show () {
			echo $this->name;
		}
	}
	
	$h = "小明";
	$p = new Person ("dongjing");
	echo $p->name."</br>";//dongjing
	echo "$p->name $h";//
	$p->show();//dongjing
	
?>