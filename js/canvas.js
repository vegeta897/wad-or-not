'use strict';

module.exports = {
    drawImage(canvas, image, scale) {
        canvas.width = image.width * scale;
        canvas.height = image.height * scale;
        let ctx = canvas.getContext('2d');
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
    }
};