'use strict';
const m = require('mithril');

module.exports = {
    view() {
        return m('main', [
            m('h1', 'WAD or Not?'),
            m(this.canvasView),
            m('h2', this.data.title)
        ]);
    }
};