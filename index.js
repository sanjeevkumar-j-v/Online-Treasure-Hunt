const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

let port = process.env.PORT;
if(port == null || port == ""){
    port = 8000;
}

app.use(express.urlencoded());

app.use(express.static('assets'));

app.use('/',require('./routes'));

const db = require('./config/mongoose');

app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// setup view engine as ejs
app.set('view engine', 'ejs');
app.set('View','./views');


app.listen(process.env.PORT || port, function(err){
    if(err){
        console.log(`Error on running the server : ${err}`);
    }
    console.log(`Server is succesfully running on the port  : ${port} `);
});