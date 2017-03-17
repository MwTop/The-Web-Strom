<?php
   $conn=new mysqli("localhost","root","usbw","data");
   $sql="SELECT * FROM user";
   $result=$conn->query($sql);
   while($row=$result->fetch_object()){
      echo $row->username."<br/>";
      echo $row->password."<br/>";
      echo $row->email."<br/>";
      echo $row->code."<br/>";
  }
?>