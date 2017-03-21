'use strict';

module.exports = Canvas;

function Canvas(canvas) {
    this.element = canvas;
    this.context = canvas.getContext('2d');
}

Canvas.prototype.setScale = function(scale) {
    this.scale = scale;
    if(this.img) this.draw();
};

Canvas.prototype.setImage = function(img) {
    this.img = img;
    this.draw();
};

Canvas.prototype.draw = function() {
    this.width = this.img.width * this.scale;
    this.height = this.img.height * this.scale;
    this.element.width = this.width;
    this.element.height = this.height;
    this.context.mozImageSmoothingEnabled = false;
    this.context.webkitImageSmoothingEnabled = false;
    this.context.msImageSmoothingEnabled = false;
    this.context.imageSmoothingEnabled = false;
    this.context.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, this.width, this.height);
};