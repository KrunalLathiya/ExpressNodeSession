const express =  require('express');
const cookieParser =  require('cookie-parser');
const bodyParser =  require('body-parser') ;
const hbs = require('express-hbs');
const path = require('path');
const expressValidator =  require('express-validator') ;
const session =  require('express-session') ;
const user = require('./routes/user.route');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.engine('hbs', hbs.express4({
   partialsDir: __dirname + '/views/partials'
 }));
 app.set('view engine', 'hbs');
 app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(expressValidator());
app.use(cookieParser());
app.use(session({secret: 'krunal', saveUninitialized: false, resave: false}));

app.use('/user',user);

app.get('/', function(req, res){
   res.send('hello world');
});

app.listen(PORT, function(){
  console.log('Server is running on',PORT);
});