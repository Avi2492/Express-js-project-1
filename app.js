const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req, res) => {
  let users = [
    {
      first_name: "Avinash",
      last_name: "Pandey",
      age: 20,
      gender: "male"
    },
    {
      first_name: "Amit",
      last_name: "Sharma",
      age: 22,
      gender: "male"
    },
    {
      first_name: "Anita",
      last_name: "Mishra",
      age: 25,
      gender: "Female"
    },
    {
      first_name: "Harleen",
      last_name: "Kaur",
      age: 20,
      gender: "Female"
    },
  ];

  res.json(users);
});

app.get('/download', (req, res) => {
  res.download(path.join(__dirname, '/downloads/CV.pdf'));
});

// redirected to aboutpage
app.get('/about', (req, res) => {
  res.redirect('/about.html');
});

app.post('/subscribe', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;

  console.log(email+'has subscribed with'+name);
})
// app.get('/', function(req, res){
//   res.send('Hello world');
// });
//
// app.get('/about', (req, res) => {
//   res.send('<h1>About</h1>');
// } );
//
// app.get('/users/:name', (req, res) => {
//   let user = req.params.name;
//   res.send('<h1>'+user+'</h1>');
// });

app.listen(3000, () => {
  console.log('server start at port no 3000....');
});
