'use strict';
const mainDiv = document.getElementById('main');
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
mainDiv.appendChild(canvas);

fetch('php/images.php')
    .then(function(response) {
        return response.text();
    })
    .then(loadImage);

function loadImage(filename) {
    console.log(filename);
    const img = document.createElement('img');
    img.src = 'textures/' + filename;
    img.onload = () => {
        console.log('image',filename,'loaded');
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);
    }
}