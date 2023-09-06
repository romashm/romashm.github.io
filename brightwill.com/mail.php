<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        try {
            
        } catch (Exception $e) {
        
        }
        
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        $company = $_POST["company"];
        
        // Адрес, на который будут отправлены данные
        $to = "brightwillservice@yandex.ru";
        
        // Тема письма
        $subject = "Message from $name. Company name is $company";
        
        // Заголовки письма
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        
        // Отправка письма
        mail($to, $subject, $message, $headers);
        
        // Перенаправление на страницу "Спасибо за отправку"
        header("Location: thank_you.html");
    } else {
        // Если попытка доступа к этому файлу напрямую, перенаправить на форму
        header("Location: index.html");
    }
?>