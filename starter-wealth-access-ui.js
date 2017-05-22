//  OpenShift sample Node application
var express = require('express'),
    fs      = require('fs'),
    app     = express();

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';



app.get('/', function (req, res) {

res.end('Hello Testing 5 remove object assign');
});




app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);


