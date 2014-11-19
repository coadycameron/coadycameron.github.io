<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = 'From: $name';
$to = 'coady.cameron@totalpave.com';
$subject = 'Contact Form Submission';

$body = "From: $name\n E-Mail: $email\n Message:\n $message";

$mail_status = mail ($to, $subject, $body, $from);

if ($_POST['submit']) {
	if (mail ($to, $subject, $body, $from)) {
		echo '<p>Your message has been sent, we will contact you as soon as possible.</p>';
	} else {
		echo '<p>Something went wrong, please review and submit again.</p>';
	}
}


?>