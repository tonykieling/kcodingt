const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const checkAuth = require("./middleware/check-auth.js");

const { createUser,
        login,
        get_all } = require('./aux/user.js');

const PORT = process.env.PORT || 3333;

app.use(express.static('public'))
app.use(cors());


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// route responsible for login the user into the system
app.post("/login", login);

// route to create the user account
app.post('/user/new', createUser);

// route to test the auth
app.post("/user/userId", checkAuth, get_all);


// // pass these routes to your front end
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public', 'index.html'))
// });


app.listen(PORT, () => console.log(`Service is running on port ${PORT}`));
