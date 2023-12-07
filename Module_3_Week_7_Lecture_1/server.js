const express = require('express');
const cookieParser = require('cookie-parser');
const PORT = 8889;

const app = express();

// middleware
app.use((req, res, next) => {
  console.log(`ROUTE: ${req.method} ${req.url}`);
  next();
});
app.use(cookieParser());
app.use(express.urlencoded({ extended: false })); // populates req.body with form data

// database
const users = {
  'nally': {
    username: 'nally',
    password: 'qwerty'
  },
  'tauqeer': {
    username: 'tauqeer',
    password: 'uiop'
  },
  'jelly': {
    username: 'jelly',
    password: 'asdf1234!'
  },
};

// setup
app.set('view engine', 'ejs');

// homepage route
app.get('/', (req, res) => {
  const possibleUsername = req.cookies.user;
  const templateVars = {
    user: possibleUsername
  };
  res.render('homepage', templateVars);
});

// login routes
app.get('/login', (req, res) => {
  const possibleUsername = req.cookies.user;
  const templateVars = {
    user: possibleUsername
  };
  res.render('login', templateVars);
});

app.post('/login', (req, res) => {
  const candidateUsername = req.body.username;
  const candidatePassword = req.body.password;

  if (candidatePassword !== users[candidateUsername].password) {
    // do something if they don't match
    res.redirect('/error');
  }

  res.cookie('user', candidateUsername);
  res.redirect('/profile');
});

// register routes
app.get('/register', (req, res) => {
  const possibleUsername = req.cookies.user;
  const templateVars = {
    user: possibleUsername
  };
  res.render('register', templateVars);
});

app.post('/register', (req, res) => {
  const candidateUsername = req.body.username;
  const candidatePassword = req.body.password;

  if (users[candidateUsername]) {
    res.redirect('/error');
  } else {
    users[candidateUsername] = {
      username: candidateUsername,
      password: candidatePassword
    };
    res.redirect('/login');
  }
});

// profile
app.get('/profile', (req, res) => {
  console.log('req.cookies', req.cookies);

  const loggedInUser = req.cookies.user;
  if (users[loggedInUser] === undefined) {
    res.redirect('/error');
  } else {
    const templateVars = {
      user: users[loggedInUser].username,
      password: users[loggedInUser].password,
    };
    res.render('profile', templateVars);  
  }
});

// logout
app.get('/logout', (req, res) => {
  res.clearCookie('user');
  res.redirect('/');
});

app.get('*', (req, res) => {
  res.status(404).render('404');
});

// listen
app.listen(PORT, () => {
  console.log(`Server is listening on PORT=${PORT}`);
});