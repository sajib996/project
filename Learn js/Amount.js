const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const PORT = 4000;
app.listen(PORT, ()=> {
    console.log(`server is running at http://localhost:${PORT}`);
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/".at(res,res)=> {
    
})