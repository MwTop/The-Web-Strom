<?php
 //var fname,city;
    $user_name=$_POST['name'];
    $user_city=$_POST['city'];

    $return=array(
	     'fname'=>'name',
	     'city'=>'city',
	 );
    $return['fname']=$user_name;
    $return['city']=$user_city;
  echo  json_encode($return);
  return;
 // fname=Request.Form("name");
// city=Request.Form("city");
?>