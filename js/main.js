'use strict';
const ImageLoader = require('./image-loader.js');
const Canvas = require('./canvas.js');
const title = document.getElementById('featureTitle');
const canvas = new Canvas(document.getElementById('featureCanvas'));
const scale = 4;
canvas.setScale(scale);

const m = require('mithril');

ImageLoader.getImage()
    .then((image) => {
        title.innerText = image.filename.slice(0, -4);
        canvas.setImage(image.img);
    })
    .catch((error) => {
        console.error(error);
    });