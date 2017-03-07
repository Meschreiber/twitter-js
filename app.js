const express = require( 'express' );
const app = express(); // creates an instance of an express application
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const routes = require('./routes');

var locals = {
  title: 'Nunjucks Example',
  people: [
    { name: 'Gandalf'},
    { name: 'Frodo' },
    { name: 'Legolas'}
  ]
};

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(function (req, res, next) {
    console.log(chalk.red(req.method) + ' ' + chalk.blue(req.route));
    next();
})

app.use('/', routes);
// app.get('/', function(req, res){
//   res.render('index', locals)
// })

app.listen(3000, function(){
    console.log('server listening');
});
