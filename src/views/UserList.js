let m = require('mithril');
let User = require('../models/User');

module.exports = {
    oninit: User.loadList,
    view: function(){
        return m('.user-list', User.list.map(user => {
            return m('.user-list-item', user.firstName + ' ' + user.lastName);
        }));
    }
}