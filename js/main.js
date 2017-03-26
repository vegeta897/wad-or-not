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
MainView.vote = () => {};
CanvasView.data = {};
CanvasView.newImage = newImage;
CanvasView.onupdate = (vNode) => {
    if(imageData) Canvas.drawImage(vNode.dom.getElementsByTagName('canvas')[0], imageData.img, scale);
};

m.mount(document.body, MainView);

function newImage() {
    ImageLoader.getImage()
        .then((imageObject) => {
            imageData = imageObject;
            MainView.data.title = imageData.filename.slice(0, -4);
            MainView.vote = voteImage;
            MainView.ready = true;
            CanvasView.ready = true;
            CanvasView.data.width = imageData.width;
            CanvasView.data.height = imageData.height;
        })
        .catch((error) => {
            console.error(error);
        });
}

function voteImage(dir) {
    console.log('vote', dir);
    MainView.ready = false;
    CanvasView.ready = false;
    MainView.vote = () => {};
    ImageLoader.voteImage(imageData.filename, dir)
        .catch((error) => {
            console.error(error);
        });
    newImage();
}

newImage();