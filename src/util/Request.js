const https = require("https");

const get = function(url, callback) {
    const request = https.get(url, (response) => {
        console.log('HTTP Response: ', response.statusCode);
        console.log('Headers: ', response.headers);

        response.setEncoding('utf-8');
        response.on('data', (data) => {
            callback(data);
        });
    })
    .on('error', (e) => {
        console.log(e);
    });

    request.on('error', (e) => {
        console.log({e});
    });

    request.end;
}

module.exports = {
    get
}