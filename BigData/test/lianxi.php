<?php
   
   $a=$_GET['user'];
   if(isset($a)){
	     $return=array(
	     'name'=>'wang',
	     'sex'=>1,
	   	);
	    echo json_encode($return);
	    return;
   }
 ?>