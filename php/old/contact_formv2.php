<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = 'From: $name';
$to = 'coady.cameron@totalpave.com';
$subject = 'Contact Form Submission';

$body = "From: $name\n E-Mail: $email\n Message:\n $message";

$mail_status = mail ($to, $subject, $body, $from);

if ($mail_status) { ?>
<script language="javascript" type="text/javascript">
// Print a message
alert('Thank you for the message. We will contact you shortly.');
// Redirect to some page of the site. You can also specify full URL, e.g. http://template-help.com
window.location = 'coadycameron.me/#templatemo-contact';
</script>
<?php
}

else { ?>
<script language="javascript" type="text/javascript">
// Print a message
alert('Message failed. Please, send an email to gordon@template-help.com');
// Redirect to some page of the site. You can also specify full URL, e.g. http://template-help.com
window.location = 'coadycameron.me/#templatemo-contact';
</script>
<?php
}?>


?>