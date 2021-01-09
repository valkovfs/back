const mongoose = require('mongoose')

const url = process.env.DB_ACCESS || 'mongodb+srv://valkov:bz0ivdDd8nphSeUb@cluster0.3aghh.mongodb.net/database?retryWrites=true&w=majority';

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })