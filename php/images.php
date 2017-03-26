<?php

$config = require('./../config.php');
require_once 'Image.php';
require_once 'ImageModel.php';

$_POST = json_decode(file_get_contents('php://input'), true);

$dsn = "mysql:host=$config->host;dbname=$config->database";
$db = new PDO($dsn, $config->username, $config->pass, array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
));

$imageModel = new \WADon\ImageModel($db);

if (isset($_POST['filename']) && $_POST['filename'] && $_POST['vote']) {
    list($image, $new) = $imageModel->getImage($_POST['filename']);
    if ($new) {
        exit(); // Invalid filename
    }
    if ($_POST['vote'] === 'up') {
        $image->upvotes++;
    } else {
        $image->downvotes++;
    }
    $imageModel->updateImage($image);
    echo json_encode('success');
    exit();
}

$dir = '../textures/';
$files = glob($dir . '*.png');
$randomFile = substr($files[array_rand($files)], strlen($dir));

list($image, $new) = $imageModel->getImage($randomFile);
if ($new) { // Image is not in database
    $imageSize = getimagesize($dir . $image->filename);
    $image->width = $imageSize[0];
    $image->height = $imageSize[1];
    $image->views = 1;
    $imageModel->addImage($image);
} else { // Image already in database
    $image->views++;
    $imageModel->updateImage($image);
}

echo json_encode($image);

exit();
