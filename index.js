const express = require('express');
const { json } = require('express/lib/response');
const app = express();

app.get('/', (req, res) =>{
    res.send("I'm working")
})

app.use(express.json())

app.use('/api/user', require('./routes/user'))
app.use('/api/post', require('./routes/posts'))

app.listen(4000, ()=>{
    console.log("listening on port 4000")
})