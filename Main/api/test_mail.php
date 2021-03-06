<?php
	require_once 'inc/connection.inc.php';
	require_once 'inc/function.inc.php';
	$query = "SELECT * FROM `users` WHERE user_id BETWEEN 1000 AND 1400";
	$result = mysqli_query($connection, $query);
	while($row = $result->fetch_assoc()){
		$name = ucwords($row["name"]);
		$email = $row["email"];
		$mok_id= $row["mok_id"];
		$to = "$email";
		$subject = "[Entry Procedure] Moksha'16, NSIT";
		$message ="<div style='color:black;'>
					<p>Dear $name,<br><br>
					You have successfully registered for Moksha '16, NSIT Delhi. Your Moksha ID is <b>$mok_id</b>.
					<br><br>You'll need to show this mail containing the QR code, your valid college ID & the app downloads below to the security personnel at Moksha for entry & for attending all events. <b>Please keep them with you at all times</b>.
					<br><br>For entry into the college premises, the following apps need to be downloaded & physically verified at the entry gates:
					<br>--
					<br>1. <b><u>Loud Shout App</u></b><br><br>
					Download link (Android): http://bit.ly/1W5iHhg
					<br>Download link (iOS): http://goo.gl/Z1ASCu
					<br><br>
					<b>Note</b>: After registering on the Loudshout App, you have to choose '<b>NSIT, Delhi</b>' as your Basecamp.
					<br><br>
					2. <b><u>Faagio</u></b>
					<br>
					Download link (Android): https://goo.gl/hJAoe7
					<br><br>
					<b>Note</b>: After signing up on the Faagio App, you have to enter the referral code <b>nsit2016</b>.
					<br>--
					<br><br>
					<b><u>Important</u></b>: Users of phones that do not support these apps would be required to show & verify this fact by displaying their phones at the entry gate.
					<br></div>
					<img src='https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=$mok_id'/>";
		$from = "ca.moksha@gmail.com";
		$headers = "From: $from"."\nMIME-Version: 1.0\nContent-Type: text/html; charset=utf-8\n";
		//echo $message;
		mail($to,$subject,$message,$headers);
		//var_dump($row);
	}

	//$json = mysqli_fetch_array($result, MYSQLI_ASSOC);
	//var_dump($json);
	//$msg = "Test message";
	//mail("manrajsinghgrover@gmail.com","My subject",$msg);
?>