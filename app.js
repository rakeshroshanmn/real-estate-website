const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on http://0.0.0.0:3000');
});