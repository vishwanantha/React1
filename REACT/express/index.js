
const express = require('express');
const AppRoutes = require('./Src/routes/hall')
const app = express();

app.use(express.json());
app.use('/',AppRoutes)
app.get('/',(req,res)=>{
    res.send("guhh")
    })

app.listen(8000)


