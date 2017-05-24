//  OpenShift sample Node application
var express = require('express'),
    app     = express();

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';



app.get('/', function (req, res) {

res.end('Welcome to test');
});




app.listen(port, ip);
console.log('Server running on test http://%s:%s', ip, port);


