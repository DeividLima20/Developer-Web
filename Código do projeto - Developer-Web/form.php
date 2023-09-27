<!--
    @DEIVIDX_OFC
-->

<?php
	include('classes/Mail.class.php');
	$m = new Mail($_POST);
	$m->sendMail();
?>

<!--
    @DEIVIDX_OFC
-->