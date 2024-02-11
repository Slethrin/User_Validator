const express = require('express');
const cookieParser = require('cookie-parser') ;
const app = express();
const port = 8000;
// const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
//  const session = require('express-session') ;

app.use(express.urlencoded()) ;
 app.use(cookieParser()) ;
app.use(express.static('./assets'));
const path = require('path');
// app.use(expressLayouts);
// extract style and scripts from sub pages into the layo
 app.set('layout extractStyles', true); 
 app.set('layout extractScripts', true);
// use express router
app.use('/', require('./routes'));

// set up the view engine
 app.set('view engine', 'ejs');
 app.set('views', path.join(__dirname, 'views'));

 app.listen(port,(err)=>{
    if(err){ console.log('error hai') ;}

    console.log(`My server start on this port ${port}`)
}) 