<?php

require 'HEADER.php';

$name;
$subjectMail;
$body ;
$recipient = 'fernando.matheuss@hotmail.com'; 

$postdata  = file_get_contents("php://input");
$request   = json_decode($postdata);

$parameter = $request->parameter;
$email;
$subject;
$message;


if($parameter == 'contactus'){

    $nameMail    = 'Fale Conosco';
    $subjectMail = 'Fale Conosco';
    $email       = $request->email;
    $subject     = $request->subject;
    $message     = $request->message;   
    
    $body        = 
    '<p><b>Assunto: </b> '.$subject.'
    <p><b>E-mail:</b> '.$email.'
    <p><b>Mensagem:</b> '.$message.'    
    <hr>';
    
}


require 'SMTP.php';  


?>

