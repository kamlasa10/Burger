<?php

    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $adress = $_POST['user-adress'];
    $message = $_POST['user-comment'];
    $pay = $_POST['pay'];
    $callback = $_POST['callback'];
    $callback = isset($Callback) ? 'Нет' : 'Да';

    $mail_message = '
            <html>
                <head>
                    <title>Заявка</title>
                </head>
                <body>
                    <h2>Заказ</h2>
                    <ul>
                        <li>Имя: ' . $name . '</li>
                        <li>телефон: ' . $phone . '</li>
                        <li>Адрес: ' . $adress . '</li>
                        <li>Комментарии к заказу: ' . $message . '</li>
                        <li>Нужно ли перезванивать клиенту: ' . $callback . '</li>
                    </ul>
                </body>
            </html>    
            ';
    $headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
        "MIME-Version: 1.0" . "\r\n" .
        "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('kamlasa@ukr.net', 'Заказ', $mail_message, $headers);

    if($mail) {
        echo 'Спасибо за заказ';
    } else {
        echo 'Что-то пошло не так';
    }
?>