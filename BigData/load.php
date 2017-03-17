
<?php
   session_start();
   $message=new mysqli("localhost","root","usbw","data");
   $name=$_POST['usr'];
   $pass=$_POST['psd'];
   $sql="SELECT * FROM register where user='".$name."'";
   $result=$message->query($sql);
   $num=$result->num_rows;
   if(!$num)
   {
       echo "000";
   }else{
   	   $row=$result->fetch_object(); 
       if($row->password==$pass){
   	   	echo $name;
   	   	   // $_SESSION['name']=$name;
           //   
   	   }
       else{
        echo "你输入的密码错误";
       }
   }
 // header("location:index.html?m=$name");  
?>
