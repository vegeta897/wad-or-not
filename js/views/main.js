'use strict';
const m = require('mithril');

module.exports = {
    view() {
        return m('main', [
            m('h1', 'WAD or Not?'),
            m('div.voting', [
                m('button.voting-button.upvote', { 
                    onclick: this.vote.bind(this, 'up'),
                    disabled: !this.ready
                }, '👍'),
                m('button.voting-button.downvote', { 
                    onclick: this.vote.bind(this, 'down'),
                    disabled: !this.ready
                }, '👎')
            ]),
            m(this.canvasView),
            m('h2', this.data.title)
        ]);
    }
};