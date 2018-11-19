var axios = require('axios');

axios.get('https://randomuser.me/api/').then(function(res) {
    var data = res.data;
    var results = data.results;
    console.log(data);
    console.log(results);
});