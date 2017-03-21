'use strict';
const m = require('mithril');

module.exports = {
    getImage: () => {
        return m.request('php/images.php').then(loadImage);
    }
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
            reject(new Error(`File "${image.filename}" not found or invalid`));
        }
    });
}