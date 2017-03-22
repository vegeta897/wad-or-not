<?php

$config = require('./../config.php');
require_once 'Image.php';
require_once 'ImageModel.php';

$dsn = "mysql:host=$config->host;dbname=$config->database";
$db = new PDO($dsn, $config->username, $config->pass, array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
));

$dir = '../textures/';
$files = glob($dir . '*.png');

$randomFile = substr($files[array_rand($files)], strlen($dir));

$imageModel = new \WADon\ImageModel($db);
list($image, $new) = $imageModel->getImage($randomFile);
if ($new) {
    $imageSize = getimagesize($dir . $image->filename);
    $image->width = $imageSize[0];
    $image->height = $imageSize[1];
    $image->views = 1;
    $imageModel->addImage($image);
} else {
    $image->views++;
    $imageModel->updateImage($image);
}

echo json_encode($image);

exit();
