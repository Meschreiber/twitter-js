const express = require( 'express' );
const app = express(); // creates an instance of an express application
const chalk = require('chalk');

app.listen(3000, function(){
    console.log('server listening');
});

app.use(function (req, res, next) {
    console.log(chalk.red(req.method) + ' ' + chalk.blue(req.route));
    next();
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
})

app.get('/', function(req, res){
    res.send('Welcome to express!\n');
})


