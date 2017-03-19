<?php

$config = include('./../config.php');
$db = mysqli_connect($config->host, $config->username, $config->pass, $config->database);

if (!$db) {
    echo 'Error: ' . mysqli_connect_error();
    exit();
}

// Initialize SQL table(s) if necessary
if(mysqli_num_rows(mysqli_query($db, "SHOW TABLES LIKE 'images'")) === 0) {
    mysqli_query($db, "CREATE TABLE images (
        filename VARCHAR(255),
        width INT,
        height INT,
        upvotes INT DEFAULT 0,
        downvotes INT DEFAULT 0,
        views INT DEFAULT 0
    )");
    mysqli_query($db, "INSERT INTO images VALUES('hi',50,50,3,1,6)");
}

$imageQuery = mysqli_query($db, "SELECT * FROM images");
while($image = mysqli_fetch_array($imageQuery)) {
    echo $image['filename'];
}

mysqli_close ($db);