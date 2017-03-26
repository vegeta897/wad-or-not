'use strict';
const m = require('mithril');

module.exports = {
    view() {
        return m('div.feature', { style: {
            width: (this.data.width ? this.data.width * 4 : 64) + 'px'
        } }, [
            m('canvas.feature-canvas', { onclick: this.newImage }),
            m('div.canvas-loader', {
                style: {
                    visibility: this.ready ? 'hidden' : 'visible',
                    top: (this.data.height ? this.data.height * 4 / 2 - 40 : 0) + 'px',
                    left: (this.data.width ? this.data.width * 4 / 2 - 40 : 0) + 'px'
                }
            }),
        ]);
    }
};