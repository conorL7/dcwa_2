var express = require('express')
var mongoDAO = require("./mongoDAO")
let ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express()

app.set('View Engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.redirect('/employees')
})

app.get('/employees', (req,res) => {
    mongoDAO.findAllEmployees()
        .then((data) => {
            res.render('employees', {'employees': data})
        })
        .catch((error) => {
            res.send(error)
        })
})

app.get('/addEmployee', (req,res) => {
    res.render('/addEmployee');
})

app.post('/addEmployee', (res,req) => {
    console.log(req.body);
})

app.listen(3000, () =>{
    console.log("Listening on port 3004!")
})
