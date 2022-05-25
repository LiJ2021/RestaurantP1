// Create a restaurant page that displays a number of menu items stored in a back-end

// In the back-end, you should include an object with all of your menu items, including at least a name, description, and price

// Your front-end should make a request to the back end to get these items and display them

//we are using express
let express = require('express')
let app = express()

//we are retrieving files from the views folder and the medium we will see the webpage through
app.set('views', './views')
app.set('view engine', 'pug')

//if we have static documents or things, tells in what folder
app.use(express.static('images'))
app.use(express.static('styles'))
app.use(express.static('scripts'))

//retrieving the exported menu from menu.js
const menuItems = require('./menu.js')

//take the stuff that is passed in through our menu.js and pass it into our restaurant.pug page
//for app.get, since we are not waiting for users to pass in parameters, shouldnt it be being passed in from menu.js?
// app.get('./menu', function (request, response){
//     response.render('restaurant')
// })

app.get('/', function(request,response){
    response.render('restaurant')
})

app.get('/menu/', function(request,response){
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With")
    
response.send(menuItems)
})


//test retrieving array of objects
// console.log(menuItems)

// //test retrieving object items
// menuItems.menu.forEach(item =>{
//     console.log(item.name)
// })

app.listen(3456)