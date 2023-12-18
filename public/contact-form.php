<?php

$data = json_decode(file_get_contents("php://input"), true);

$name = getVariable("name");
$email = getVariable("email");
$message = getVariable("message");

if (empty(trim($name))) {
    error("Name is blank");
}

if (empty(trim($message))) {
    error("Message is blank");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    error("Invalid email"); 
}

$configString = file_get_contents("../config.json");
$config = json_decode($configString, true);
$mail = $config["mail"];

$subject = "New Message";
$headers = getMailHeaders();
$mailMessage = "Name: " . $name . "\n"
        . "Email: " . $email . "\n"
        . "Message: " . $message;
						
if (mail($mail["address"], $subject, $mailMessage, $headers)) {
    echo '{"success": "Message sent"}';
} else {
    error("Message failed to send.");
}

function getMailHeaders() {
	global $mail;

	$headers = "From: \"" . $mail["name"] . "\" <" . $mail["address"] . ">\r\n"
			. "Reply-To: \"" . $mail["name"] . "\" <" . $mail["address"] . ">\r\n";

	$mailToArray = $mail["to"];
	$mailToArrayCount = count($mailToArray);

	$mailToOthers = "";
	for ($x = 0; $x < $mailToArrayCount; $x++) {
		$mailToOthers .= "\"" . $mail["to"][$x]["name"] . "\" <" . $mail["to"][$x]["address"] . ">";
		if ($x != $mailToArrayCount - 1) { // not last 
			$mailToOthers .= ",";
		}
	}
	$headers .= "Bcc: " . $mailToOthers;

	return $headers;
}


function getVariable($variable) {
    global $data;
    if (!isset($data[$variable])) {
        error("No " . $variable . " given");
        exit();
    }
    return $data[$variable];
}

function error($message) {
    echo '{"error": "' . $message . '"}';
    exit();
}
