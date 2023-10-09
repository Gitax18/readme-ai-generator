// Adding third party libs
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// routes
const appRoutes = require('./routes/app')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

// routes
app.use(appRoutes);

app.listen(3000,()=>{
    console.log('server is listening at http://localhost:3000');
})
