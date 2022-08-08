const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require ('express-handlebars');

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
// console.log(path.join(__dirname, '/public'));
//HTTP logger
app.use(morgan('combined'))




app.engine('hbs', engine({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
// app.set("views", './src/resources/views');
app.set("views", path.join(__dirname, 'resources/views'));
// console.log(path.join(__dirname, 'resources  views'));

// console.log('PATH >>>',path.join(__dirname, './src/resources/views'))
// Routes
app.get('/', function (req, res) {
  res.render('home');
});

app.get('/new', (req, res, next) => {
  res.render('news');
});


// app.get('/', (req, res) => {
//   res.send(`<h1>Hello World!</h1>`)
// })

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`)
})