const express = require( 'express' );
const app = express(); // creates an instance of an express application
const chalk = require('chalk');
const path = require('path');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser');

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



// app.get('/', function(req, res){
//   res.render('index', locals)
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);


app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    console.log(chalk.red(req.method) + ' ' + chalk.blue(req.route));
    next();
})


// Always put the listener last
app.listen(3000, function(){
    console.log('server listening');
});
