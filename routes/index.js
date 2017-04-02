var express = require('express');
var router = express.Router();
var path = require('path');



/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' })
    //res.sendFile('drawing/public/HTML/index.html',{ root: '../' });
    res.sendFile('index.html', { root: path.join(__dirname, '../public/HTML') });
    /*
    // array of all lines drawn
    var lineHistory = [];

    // event-handler for new incoming connections
    io.on('connection', function (socket) {

        // first send the history to the new client
        for (var i in lineHistory) {
            socket.emit('draw_line', { line: lineHistory[i] } );
        }

        // add handler for message type "draw_line".
        socket.on('draw_line', function (data) {
            // add received line to history
            lineHistory.push(data.line);
            // send line to all clients
            io.emit('draw_line', { line: data.line });
        });
    });
    */
});
module.exports = router;
