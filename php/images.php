<?php
$dir = '../textures';
$files = scandir($dir);

echo $files[array_rand($files)] . ' of ' . sizeof($files);