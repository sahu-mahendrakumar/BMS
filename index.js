const express = require('express');
const cors = require('cors');
const app = express();
const mongooes = require('mongoose');//change
const dburl = "mongodb+srv://sahumahendra786:xdDNVtZc6inIP4AT@cluster0.ilyh4j4.mongodb.net/scaler?retryWrites=true&w=majority&appName=Cluster0";

const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const theatreRoutes = require('./routes/theatreRoutes');
const showRoutes = require('./routes/showRoutes');

app.use(cors());
app.use(express.json());

mongooes.connect(dburl).then(function(){//change
    console.log('Connected to DB');
}).catch(err => console.log(err));

app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/theatres', theatreRoutes);
app.use('/api/shows', showRoutes);
 
app.listen(8082, () =>{
    console.log('Server is connected!');
})
    