<?php

$config = require('./../config.php');
require_once 'Image.php';
require_once 'ImageModel.php';

$dsn = "mysql:host=$config->host;dbname=$config->database";
$db = new PDO($dsn, $config->username, $config->pass, array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
));

$dir = '../textures';
$files = scandir($dir);

$randomFile = $files[array_rand($files)];

$imageModel = new \WADon\ImageModel($db);
$image = $imageModel->getImage($randomFile);

echo json_encode($image);

exit();
