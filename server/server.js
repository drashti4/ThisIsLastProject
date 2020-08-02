const express = require('express');
const cors= require('cors');
const httpHandler = require('./src/HTTPhandler');
const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/getusers',httpHandler.getUsers)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
