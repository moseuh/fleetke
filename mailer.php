<?php
//get data from form  
$fullname = $_POST['fullname'];
$emails= $_POST['emails'];
$message= $_POST['message'];
$to = "mosesmaweu46@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $fullname . "\r\n  Email = " . $emails . "\r\n Message =" . $message;
$headers = "From: mosesmaweu46@gmail.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($emails!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>