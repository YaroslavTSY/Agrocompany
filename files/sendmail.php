<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('en', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('user@gmail.com', 'Anonim User');
	//Кому отправить
	$mail->addAddress('is2419227@gmail.com');
	//Тема письма
	$mail->Subject = 'Hi! It\'s a first test message!';

	//Тело письма
	$body = '<h1>The best message!</h1>';
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}

	$mail->Body = $body;

	//Sending
	if (!$mail->send()) {
		$message = 'Error';
	} else {
		$message = 'Data are send!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>