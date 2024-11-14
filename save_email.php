<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = htmlspecialchars($_POST['email']);
    $file = 'emails.txt';

    if (!empty($email)) {
        file_put_contents($file, $email . PHP_EOL, FILE_APPEND);
        http_response_code(200); // Success
    } else {
        http_response_code(400); // Bad Request
    }
} else {
    http_response_code(405); // Method Not Allowed
}
?>
