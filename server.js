const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const { createUser,
        login } = require('./aux/user.js');

const PORT = process.env.PORT || 3333;

app.use(express.static('public'))

// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


// without using middleware (placed before them)
app.get('/', (req, res) => {
  console.log("root directory");
  res.status(200).send({message: "this is root directory"});
});


// route responsable for login the user into the system
app.post("/login", login);

// route to create the user account
app.post('/user/new', createUser);



// pass these routes to your front end
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'))
});


app.listen(PORT, () => console.log(`Service is running on port ${PORT}`));
