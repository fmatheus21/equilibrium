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


if($parameter == 'representative'){

    $nameMail    = 'Representante';
    $subjectMail = 'Representante';
    $email       = $request->email;
    $subject     = $request->subject;
    $message     = $request->message;   
    
    $body        = 
    '<p><b>Assunto: </b> '.$subject.'
    <p><b>E-mail:</b> '.$email.'
    <p><b>Mensagem:</b> '.$message.'    
    <hr>';

}


if($parameter == 'receive'){

    $nameMail    = 'Receba as Novidades';
    $subjectMail = 'Receba as Novidades';
    $email       = $request->email;  
    
    $body        = 
    '<p><b>Assunto: </b> '.$subjectMail.'
    <p><b>E-mail: </b> '.$email.'  
    <p><b>Mensagem: </b> Foi enviado uma solicitação para receber novidades.
    <hr>';

}




require 'SMTP.php';  


?>

