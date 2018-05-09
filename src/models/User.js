let m = require('mithril');

let User = {
    list: [],
    loadList: function(){
        return m.request({
            method: "GET",
            url: 'https://rem-rest-api.herokuapp.com/api/users',
            withCredentials: true,
        })
        .then( res => {
            User.list = res.data;
        })
    },
}

module.exports = User;