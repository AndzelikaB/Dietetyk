<?php

ini_set("SMTP","ssl://smtp.gmail.com");
ini_set("smtp_port","465");

  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $message = htmlspecialchars($_POST['message']);
  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "andzelalala@gmail.com";
      $subject = "From: $name <$email>";
      $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message\n\nRegards,\n$name";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Wiadomość została wysłana";
      }else{
         echo "Błąd wysyłania wiadomości";
      }
    }else{
      echo "Wprowadź poprawny adres email";
    }
  }else{
    echo "Wypełnij wszystkie pola";
  }
?>