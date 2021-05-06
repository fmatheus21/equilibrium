<?php

require 'HEADER.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

@$parameter= $request->parameter;
@$emailForm;
@$subjectForm;
@$messageForm;

if($parameter == 'contactus'){
    $emailForm = $request->emailForm;
    $subjectForm = $request->subjectForm;
    $messageForm = $request->messageForm;
}





$recipient = 'form@aliancario.org.br'; 
$subject = 'Cotação';

$body = '<strong>'.$subject.'</strong>
<p><b>Nome:</b> '.$name.'
<p><b>E-Mail:</b> '.$email.'
<p><b>Telefone:</b> '.$phone.'
<p><b>Modelo do Carro:</b> '.$model.'
<p><b>Ano do Carro:</b> '.$year.'
<p><b>Cor do Carro:</b> '.$color.'
<p><b>Assunto:</b> '.$subject.'
<hr>';

require 'SMTP.php';  


?>


