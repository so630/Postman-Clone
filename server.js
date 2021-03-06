import CircularJSON from 'circular-json';
import express from 'express';
import path from 'path';
const app = express();
import axios from 'axios';
let __dirname = path.dirname('')
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static(__dirname + '/build'))

app.post('/req', (req, res) => {
    const options = req.body;
    console.log(options)
    axios.request(options).then((response) => {
        let json = CircularJSON.stringify(response)
        res.json(json)
    }).catch((error) => {
        res.json(error.json());
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html')
})

app.listen(process.env.PORT || 4000)