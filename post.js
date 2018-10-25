var express = require('express');
var app = express();
app.use(express.static(__dirname));
 
var games = [{
        id: 1,
        title: 'Mario'
    },
    {
        id: 2,
        title: 'Zelda'
    },
    {
        id: 3,
        title: 'Donkey Kong'
    }
];
 
// get all games
app.get('/', (req, res) => {
    res.send(games);
});
 // get game by id
app.get('/game/:id', (req, res) => {
    const game = games.find(g => g.id === parseInt(req.params.id));
    if (!game) return res.status(404).send('The game with the given ID was not found.');
    res.send(game);
});
 app.get('/addagame',(req,res) =>{
    res.sendFile( __dirname + "/" + "input.html" );
 });

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
// add a game
app.post('/addgame', (req, res) => {
    var game={
        id: req.body.id,
        title: req.body.title
    }
    games.push(game);
    res.send(games);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));