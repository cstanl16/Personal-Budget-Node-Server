const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection has been established");
});

const userRouter = require('./routes/user');
const budgetRouter = require('./routes/budget');

app.use('/user', userRouter);
app.use('/budget', budgetRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});