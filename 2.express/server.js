let express = require('express');
let app = express();
let index = require('./routes/index');
app.use('/',index);
app.listen(8080);