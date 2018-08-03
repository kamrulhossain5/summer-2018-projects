const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const books = require('google-books-search')

const server = express()

server.use( logger('dev'))

server.set('view engine', 'ejs') //this allows us to use ejs - embedded javascript
server.use(express.static('views')) // sets express up to server static files
server.set('views', __dirname+'/public') // tells express to find our static files in the 

// attaches form data to request.body in all request
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:false}))

// server response to the get request to the homepage
// with a function that takes in a request object and
// a response object
server.get('/', (request, response) => {
    //response.send('<h1>My New App</h1>')
    response.render('home.ejs')
})

server.post('/results', (request, response) =>{
    console.log(request.body)
    
    books.search(request.body.search, function(error, results) {
    if ( ! error ) {
        console.log(results);
        response.render('results.ejs', {data: results})
    } else {
        console.log(error);
        response.render('results.ejs', {data: error})
    }

        
    });
    
})

const port = process.env.PORT

server.listen(port, function() {
    console.log('Server running on port: '+port)
})
