const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const Players = require('./routers/Players');
const app = express();
const port = 3000;


mongoose.connect('mongodb://localhost:27017/PremDatabase', {
    "useNewUrlParser": true,
    "useUnifiedTopology": true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected')
});




// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const PremSchema = new mongoose.Schema({
//     Name: String

//  });

// const prem = mongoose.model('player', PremSchema);


//let Players = [];

app.use('/Players', Players);

app.get('/', (req, res) =>
    res.send('Testing port: ' + port));

app.get("/players", (req, res) => {
    res.send(Players);
});

app.get("/players/:id", (req, res) => {
    let id = req.params.id;
    res.json(Players[id]);
});
app.get("/Players/:age", (req, res) => {
    let id = req.params.age;
    res.json(Players[age]);
});

app.all('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server!`
    });
});

//
// edit code above so i can add name

// app.get('/addPlayer/:name', (req, res) => {

//     const aplayer = new prem({ name: req.params.name });

//     aplayer.save()
//         .then((result) => res.send(`${req.params.name} was saved`))
//         .catch((err) =>
//             console.error(err));
// });

app.listen(port, () => console.log(`Example app listening on 
  : ${port}!`))