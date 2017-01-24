var express = require('express')
var app = express()

app.get('/', function (req, res,next) {
    //console.log(req.param.timestamps);
  
    var header = req.headers;
    var ip = header["x-forwarded-for"]
    var language = header["accept-language"].split(",")[0]
    var op_system = header["user-agent"].split(" (")[1].split(")")[0]
    var message = {"ip address":ip, "language": language, "operating system":op_system}

    res.send(message);
     
})

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/Public/index.html');
})

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!')
})