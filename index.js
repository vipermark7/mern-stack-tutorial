const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


const employee = require('./routes/employee');
app.use('/employee', employee);

let mongooseOptions = {
    useNewUrlParser: true,
    useFindAndModify: false,
};
mongoose.connect('mongodb://localhost:27017/mernstack', mongooseOptions, (err) => {
    if (err) {
        console.log("Failed to connect to database");
        process.exit(1);

    } else
        console.log("Succesfully connected to database");
});

// setting port to 5000 because app will run on 3000, so we can't use that port
const port = process.env.PORT || 5000;

app.listen(port, () => { console.log("App is running!"); });