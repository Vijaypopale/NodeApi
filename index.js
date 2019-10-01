const express = require('express');
const router = require('./routes/router');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = Promise;
const app = express();

mongoose.connect(process.env.DB_HOST, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    }).then(() => console.log('DB Connected!'))
    .catch(err => console.log(`DB Connection Error: ${err.message}`));


app.use(express.json());
app.use('/api', router);



const PORT = 3000 || process.env.PORT;
app.listen(PORT, ()=> console.log(`App listening on port ${PORT}!`));