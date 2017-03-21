'use strict';
const Canvas = require('./canvas.js');
const title = document.getElementById('featureTitle');
const canvas = new Canvas(document.getElementById('featureCanvas'));
const scale = 4;
canvas.setScale(scale);

fetch('php/images.php')
    .then(function(response) {
        return response.json();
    })
    .then(loadImage);

function loadImage(image) {
    title.innerText = image.filename;
    const img = document.createElement('img');
    img.src = 'textures/' + encodeURIComponent(image.filename);
    img.onload = () => {
        console.log('image', image.filename, 'loaded');
        canvas.setImage(img);
    }
}