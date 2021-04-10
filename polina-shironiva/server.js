const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const url = require('url')
const queryString = require('querystring')
const fs = require('fs')
const bodyParser = require('body-parser')

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db.sqlite')

app.use(express.static('static'))
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/history_arch', (req, res) => {
    res.render('history_arch')
})

app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/main-content', (req, res) => {
    res.render('main-content')
})

app.get('/updateData', (req, res) => {
    let sql = "SELECT * FROM Videos"

    db.all(sql, [], (er ,rows) => {
        if (er) console.log(er)
        else res.send(JSON.stringify(rows))
    }
    )
})

app.get('*', function(req, res){
    res.render('404');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
