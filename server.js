const express = require('express');
const path = require('node:path');
const app = express();
const index_routes =  require('./routes/index_routes')

//setings
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname,'/views'));

//routes
app.use(index_routes);

app.listen(3000,()=>{
    console.log("server on http://localhost:3000/");
})