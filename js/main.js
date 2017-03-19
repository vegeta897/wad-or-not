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
        return response.json();
    })
    .then(loadImage);

function loadImage(image) {
    const img = document.createElement('img');
    img.src = 'textures/' + encodeURIComponent(image.filename);
    img.onload = () => {
        console.log('image', image.filename, 'loaded');
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);
    }
}