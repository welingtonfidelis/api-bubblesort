// TODO: Implement the web server here.
var express = require('express');
const cors = require('cors');
var app = express();
app.use(express.json());
app.use(cors());

const sort = require('./lib/sort');

app.get('/', (req, res) =>{
    console.log('1');
    
})
app.post('/sort', (req, res) => {
    const {array} = req.body;
    console.log('entrada', array);

    console.log('saida', sort(array));

    res.send(array);
})


app.listen(3000, function () {
    console.log(`Server running in 3000\n\n`);
});