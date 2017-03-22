'use strict';
const ImageLoader = require('./image-loader.js');
const Canvas = require('./canvas.js');
const m = require('mithril');
const MainView = require('./views/main.js');
const CanvasView = require('./views/canvas.js');

let scale = 4;
let imageData;

MainView.data = {};
MainView.canvasView = CanvasView;
CanvasView.newImage = newImage;
CanvasView.onupdate = function(vnode) {
    if(imageData) Canvas.drawImage(vnode.dom, imageData.img, scale);
};

m.mount(document.body, MainView);

function newImage() {
    ImageLoader.getImage()
        .then((imageObject) => {
            imageData = imageObject;
            MainView.data.title = imageData.filename.slice(0, -4);
        })
        .catch((error) => {
            console.error(error);
        });
}

newImage();