import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import todosRouter from './routes/todos.js';

const app = express();
dotenv.config();
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/todos',todosRouter);

const mongodb = "mongodb+srv://aaran:alpha@cluster0.grkodfd.mongodb.net/todos-database?retryWrites=true&w=majority";

app.get('/', (req,res) => {
    res.send('Welcome to Server.');

})

const PORT = process.env.PORT || 5000;

mongoose.connect(mongodb, { useUnifiedTopology: true }, { useNewUrlParser: true } )
    .then( () => {
        console.log("Connected to MongoDB");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
          });

    })
    .catch( err => console.log(err));


