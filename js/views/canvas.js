'use strict';
const m = require('mithril');

module.exports = {
    view() {
        return m('canvas[id=featureCanvas]', { onclick: this.newImage });
    }
};