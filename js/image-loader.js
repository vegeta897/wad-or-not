'use strict';

module.exports = {
    getImage: fetch('php/images.php')
        .then(checkStatus)
        .then((response) => {
            return response.json();
        })
        .then(loadImage)
    
};

function loadImage(image) {
    return new Promise((resolve, reject) => {
        if(!image.filename) return reject(new Error('Image missing filename'));
        image.img = document.createElement('img');
        image.img.src = 'textures/' + encodeURIComponent(image.filename);
        image.img.onload = () => {
            console.log('image', image.filename, 'loaded');
            resolve(image);
        };
        image.img.onerror = () => {
            reject(new Error('Image not found or invalid'));
        }
    });
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}