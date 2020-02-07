
//IMPORTS
const express = require('express');
const hbs = require('hbs');
const app = express();
const PORT = 3000;


// SET THE TEMPLATE ENGINE
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

//MIDDLEWARE 
app.get('/', (req, res) => {
    res
        .status(200)
        .render('index')
});

app.post('/formdata', (req, res, next) => {
    console.log('/formdata -->', req.body);
    res.send();  
});







// SET THE STATIC FOLDER FOR PUBLIC FILES
app.use(express.static(__dirname + '/public'));

// REGISTER THE PARTIAL 
hbs.registerPartials(__dirname + '/views/partials');

//ROUTES

app.get("/search/:name/:city", (req, res, next) => {
    console.log(req.params, req.query);
    
});

// START THE SERVER
app.listen(PORT, () => console.log(`Server listening on port ${ PORT } !`));