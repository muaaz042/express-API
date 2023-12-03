const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017").then(()=>{
    console.log('connection established')
}).catch(err => console.error('connection error: ' + err)); 