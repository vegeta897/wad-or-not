'use strict';
const mainDiv = document.getElementById('main');
const scale = 4;
const canvas = document.createElement('canvas');
canvas.style.transform = `scale(${scale}, ${scale})`;
const context = canvas.getContext('2d');
context.mozImageSmoothingEnabled = false;
context.imageSmoothingEnabled = false;
mainDiv.appendChild(canvas);

fetch('php/images.php')
    .then(function(response) {
        return response.text();
    })
    .then(loadImage);

function loadImage(filename) {
    const img = document.createElement('img');
    img.src = 'textures/' + encodeURIComponent(filename);
    img.onload = () => {
        console.log('image',filename,'loaded');
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);
    }
}

fetch('php/db.php')
    .then(function(response) {
        return response.text();
    }).then(function(text) {
    console.log(text);
});